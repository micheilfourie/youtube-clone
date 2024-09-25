import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import Buttons from "./Buttons"
import { useState } from "react"

const SearchBar = () => {

    const [inFocus, setInFocus] = useState(false)
    const [text, setText] = useState("")

    const handleChange = (e) => {
        e.preventDefault()
        setText(e.target.value)
    }

    const clearText = () => {
        setText("")
    }

    const toggleFocus = () => {
        setInFocus(!inFocus)
    }

    return (

        <form action="" className="flex w-full">
            <div className={`${inFocus ? "border-[#196896] border-[1px]" : ""} relative rounded-l-full flex w-full`} >

                <div className={`flex justify-center items-center text-[17px] pl-4 ${inFocus ? "" : "hidden"}`} >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>

                <input
                    id="search"
                    type="text"
                    placeholder="Search"
                    onFocus={toggleFocus}
                    onBlur={toggleFocus}
                    value={text}
                    onChange={(e) => handleChange(e)}
                    className={`bg-black rounded-l-full p-2.5 pl-4 ${inFocus ? "" : "border-[1px] ml-[35px]"} border-grey outline-none pr-12 w-full`}
                />

                <div className={`absolute right-1 top-[0.2rem] ${text.length === 0 ? "hidden" : ""}`}>
                    <Buttons type="clear" clearText={clearText} />
                </div>
            </div>

            <Buttons type='submit' />

        </form>

    )
}

export default SearchBar
