import { dehydrate } from "@tanstack/react-query"
import { GetStaticProps } from "next"
import { CONFIG } from "site.config"
import { getPosts, getRecordMap } from "src/apis"
import MetaConfig from "src/components/MetaConfig"
import { queryKey } from "src/constants/queryKey"
import usePostQuery from "src/hooks/usePostQuery"
import { queryClient } from "src/libs/react-query"
import { filterPosts } from "src/libs/utils/notion"
import { FilterPostsOptions } from "src/libs/utils/notion/filterPosts"
import Detail from "src/routes/Detail"
import CustomError from "src/routes/Error"
import { NextPageWithLayout } from "../types"

const filter: FilterPostsOptions = {
  acceptStatus: ["Public", "PublicOnDetail"],
  acceptType: ["Paper", "Post", "Page"],
}

export const getStaticPaths = async () => {
  console.log("********** 21 => starting getStaticPaths() in [slug].tsx")
  console.log(
    `L 23 => ${new Date().getMinutes()} minutes, ${new Date().getSeconds()} seconds`
  )
  const posts = await getPosts()

  const filteredPost = filterPosts(posts, filter)

  console.log(filteredPost.map((row) => `/${row.slug}`))
  console.log(
    `L 30 => ${new Date().getMinutes()} minutes, ${new Date().getSeconds()} seconds`
  )
  return {
    paths: filteredPost.map((row) => `/${row.slug}`),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  console.log("********** 32 => starting getStaticProps() in [slug].tsx")
  console.log(
    `L 41 => ${new Date().getMinutes()} minutes, ${new Date().getSeconds()} seconds`
  )
  const slug = context.params?.slug

  const posts = await getPosts()

  const feedPosts = filterPosts(posts)
  await queryClient.prefetchQuery(queryKey.posts(), () => feedPosts)

  const detailPosts = filterPosts(posts, filter)
  const postDetail = detailPosts.find((t: any) => t.slug === slug)
  const recordMap = await getRecordMap(postDetail?.id!)

  await queryClient.prefetchQuery(queryKey.post(`${slug}`), () => ({
    ...postDetail,
    recordMap,
  }))

  console.log(
    `L 60 => ${new Date().getMinutes()} minutes, ${new Date().getSeconds()} seconds`
  )
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: CONFIG.revalidateTime,
  }
}

const DetailPage: NextPageWithLayout = () => {
  const post = usePostQuery()

  if (!post) return <CustomError />

  const image =
    post.thumbnail ??
    CONFIG.ogImageGenerateURL ??
    `${CONFIG.ogImageGenerateURL}/${encodeURIComponent(post.title)}.png`

  const date = post.date?.start_date || post.createdTime || ""

  const meta = {
    title: post.title,
    date: new Date(date).toISOString(),
    image: image,
    description: post.summary || "",
    type: post.type[0],
    url: `${CONFIG.link}/${post.slug}`,
  }

  return (
    <>
      <MetaConfig {...meta} />
      <Detail />
    </>
  )
}

DetailPage.getLayout = (page) => {
  return <>{page}</>
}

export default DetailPage
