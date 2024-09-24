import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const SearchBar = () => {

    const [inFocus, setInFocus] = useState(false)

    return (
        <div>
            <form action="" className="flex w-full">
                <div className={`${inFocus ? "border-[#196896] border-[1px]" : ""} rounded-l-full flex`} >

                    <div className={`flex justify-center items-center text-[17px] pl-6 ${inFocus ? "" : "hidden"}`} >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>

                    <input type="text" placeholder="Search" className={`bg-black rounded-l-full p-2.5 pl-4 ${inFocus ? "" : "border-[1px]"} border-grey outline-none w-[350px]`} onFocus={() => setInFocus(true)} onBlur={() => setInFocus(false)} />

                </div>

                <button className="text-center text-[17px] bg-grey rounded-r-full p-2.5 pr-6 pl-5">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>

            </form>
        </div>
    )
}

export default SearchBar
