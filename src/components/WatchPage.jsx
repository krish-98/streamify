import { useSearchParams } from "react-router-dom"

const WatchPage = () => {
  const [searchParams] = useSearchParams()

  return (
    <div className="my-4">
      <iframe
        className="pl-40"
        width="1400"
        height="700"
        src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  )
}
export default WatchPage
