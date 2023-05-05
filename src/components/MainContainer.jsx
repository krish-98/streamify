import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"

const MainContainer = () => {
  return (
    <div className="flex-1 self-center space-y-6">
      <ButtonList />
      <VideoContainer />
    </div>
  )
}
export default MainContainer
