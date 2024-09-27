import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import Buttons from "./Buttons"
import { useState } from "react"

const SearchBar = () => {

    const [inFocus, setInFocus] = useState(false)
    const [text, setText] = useState("")

    const toggleFocus = () => {
        setInFocus(!inFocus)
    }

    const handleChange = (e) => {
        e.preventDefault()
        setText(e.target.value)
    }

    const clearText = () => {
        setText("")
    }

    const handleSubmit = () => {
        clearText()
    }

    return (

        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} action="" className="flex justify-center items-center w-full h-full">
            <div className={`${inFocus ? "border-[#196896]" : "border-transparent"} border-[1px] relative rounded-l-full flex w-full`} >

                <div className={`flex justify-center items-center text-[17px] pl-6 ${inFocus ? "" : "hidden"}`} >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>

                <input
                    id="search"
                    type="text"
                    autoComplete="off"
                    placeholder="Search"
                    value={text}
                    onFocus={toggleFocus}
                    onBlur={toggleFocus}
                    onChange={(e) => handleChange(e)}
                    className={`bg-black rounded-l-full p-2.5 pl-5 ${inFocus ? "border-transparent" : "ml-[34px]"} border-[1px] border-r-0 border-grey outline-none pr-12 w-full`}
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
