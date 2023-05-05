const VideoCard = ({ video }) => {
  return (
    <div className="border rounded-3xl w-60 h-64 cursor-pointer">
      <img
        className="w-full  object-contain rounded-t-3xl"
        src={video?.snippet?.thumbnails?.maxres?.url}
        alt={""}
      />
      <div className="my-1 px-4">
        <h2 className="font-semibold">{video?.snippet?.title}</h2>
        <h3 className="font-semibold text-sm tracking-wide text-[#666]">
          {video?.snippet?.channelTitle}
        </h3>
        <p className="text-sm tracking-wide">
          {video?.statistics?.viewCount} views
        </p>
      </div>
    </div>
  )
}
export default VideoCard
