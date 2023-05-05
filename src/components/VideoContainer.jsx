import { useEffect, useState } from "react"
import { YOUTUBE_API_ENDPOINT } from "../config/constants"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"

const VideoContainer = () => {
  const [video, setVideo] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const res = await fetch(YOUTUBE_API_ENDPOINT)
      const data = await res.json()
      setVideo(data?.items)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-10 px-10">
      {video?.map((video) => (
        <Link key={video?.id} to={`/watch?v=${video?.id}`}>
          <VideoCard video={video} />
        </Link>
      ))}
    </div>
  )
}
export default VideoContainer
