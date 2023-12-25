import { useCallback, useEffect, useState } from "react"
import { ReactCusdis } from "react-cusdis"
import { CONFIG } from "site.config"

type Props = {
  id: string
  slug: string
  title: string
}

const Cusdis: React.FC<Props> = ({ id, slug, title }) => {
  const [value, setValue] = useState(0)

  const onDocumentElementChange = useCallback(() => {
    setValue((value) => value + 1)
  }, [])

  useEffect(() => {
    const changesObserver = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        onDocumentElementChange()
      })
    })

    changesObserver.observe(document.documentElement, {
      attributeFilter: ["class"],
    })

    return () => {
      changesObserver.disconnect()
    }
  }, [onDocumentElementChange])

  return (
    <>
      <div className="mt-10" id="comments">
        <ReactCusdis
          key={value}
          attrs={{
            host: CONFIG.cusdis.config.host,
            appId: CONFIG.cusdis.config.appid,
            pageId: id,
            pageTitle: title,
            pageUrl: `${CONFIG.link}/${slug}`,
          }}
        />
      </div>
    </>
  )
}

export default Cusdis
