import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const SearchBar = () => (
    <div>
        <input type="text" placeholder="Search" className="bg-black rounded-l-full p-2 pl-4 border-[1px] border-grey w-[350px]" />
        <button className="text-center text-[17px] bg-grey rounded-r-full p-2 pr-6 pl-5">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
    </div>
)

export default SearchBar
