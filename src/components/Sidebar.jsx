import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Sidebar = () => {
  const { isToggle } = useSelector((store) => store.nav)

  if (!isToggle) return null

  return (
    <div className="hidden md:block h-[calc(100vh-74px)] w-56 pl-10 border-r pt-6 overflow-y-auto">
      <ul className="mb-2 space-y-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscription</li>
        <hr />
      </ul>
      <ul className="mb-2 space-y-2">
        <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <hr />
      </ul>
      <ul className="space-y-2">
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies & shows</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Learning</li>
      </ul>
    </div>
  )
}
export default Sidebar
