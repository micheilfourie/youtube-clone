import SearchBar from "./SearchBar.jsx"
import Buttons from "./Buttons.jsx"

const Navbar = () => (
    <nav className="fixed w-full flex flex-row justify-between items-center px-[26px] py-3 bg-black">

        <div className="flex flex-row items-center mr-4">
            <Buttons type="hamburger" />
            <a href="#home" className="hover:cursor-pointer relative">
                <img src="src\assets\youtube-logo-white.svg" height={105} width={105} alt="logo" />
                <span className="absolute right-0 text-[10px] font-bold tracking-wide">Clone</span>
            </a>
        </div>

        <div className="flex flex-row items-center w-[50%] max-w-[700px]">
            <SearchBar />
            <Buttons type="voice" />
        </div>

        <div className="flex flex-row items-center">
            <Buttons type="create" />
            <Buttons type="notification" />
            <Buttons type="profile" />
        </div>
    </nav>
)

export default Navbar
