import { GiHamburgerMenu } from "react-icons/gi"
import { BsYoutube } from "react-icons/bs"
import { BiSearch } from "react-icons/bi"
import { MdOutlineNotificationsNone } from "react-icons/md"
import { TbAdjustmentsHorizontal } from "react-icons/tb"
import user from "../assets/user.png"

const Head = () => {
  return (
    <>
      {/* Mobile Header */}
      <nav className="grid grid-flow-col items-center p-4 shadow-md md:hidden">
        <div className="flex items-center gap-1">
          <BsYoutube className="h-6 w-6 fill-red-600" />
          <h1 className="font-bold tracking-wide text-lg">Streamify</h1>
        </div>

        <div className="flex items-center gap-4 justify-end">
          <BiSearch className="h-6 w-6" />
          <img
            className="h-8 w-7 object-contain"
            src={user}
            alt="user profile"
          />
        </div>
      </nav>

      {/* From Tab - Desktop Header */}
      <nav className="hidden md:flex items-center justify-between p-4 px-6 xl:px-8">
        <div className="flex items-center gap-4">
          <GiHamburgerMenu className="h-6 w-6" />
          <div className="flex items-center gap-1">
            <BsYoutube className="h-6 w-6 fill-red-600" />
            <h1 className="font-bold tracking-wide text-lg xl:text-xl">
              Streamify
            </h1>
          </div>
        </div>

        <div className="flex justify-between items-center border w-1/2 rounded-full xl:max-w-[600px] xl:mr-24">
          <BiSearch className="h-6 w-6 mr-4 ml-4" />
          <input
            className="w-full py-2 pl-3 border-none focus:outline-red-300"
            type="text"
            name=""
            placeholder="Search Everything..."
          />
          <TbAdjustmentsHorizontal className="h-6 w-6 ml-4 mr-4" />
        </div>

        <div className="flex items-center gap-6 xl:w-32">
          <MdOutlineNotificationsNone className="h-6 w-6" />
          <img
            className="h-8 w-7 object-contain"
            src={user}
            alt="user profile"
          />
        </div>
      </nav>
    </>
  )
}

export default Head
