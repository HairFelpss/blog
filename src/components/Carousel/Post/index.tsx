type Props = {
  postId: string
  nextPostId: string
  prevPostId: string
}

const Post: React.FC<Props> = ({ postId, nextPostId, prevPostId }) => {
  return (
    <div
      id={postId}
      className="carousel-item relative w-full h-full flex flex-row justify-between items-center bg-base-200"
    >
      <div>
        <a href={`#${prevPostId}`} className="btn btn-circle">
          ❮
        </a>
      </div>
      <div className="divider divider-horizontal bg-base-200"></div>
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="divider divider-horizontal bg-base-200"></div>
      <div>
        <a href={`#${nextPostId}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  )
}

export default Post
