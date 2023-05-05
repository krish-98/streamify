import { lists } from "../config/constants"

const ButtonList = () => {
  return (
    <ul className="flex items-center justify-center gap-4">
      {lists?.map((list, index) => (
        <li
          key={index}
          className="bg-gray-100 text-center py-1 px-3 rounded-lg cursor-pointer hover:bg-gray-200  active:bg-black active:text-white transition-all duration-300"
        >
          {list}
        </li>
      ))}
    </ul>
  )
}
export default ButtonList
