import SearchBar from "./SearchBar.jsx"
import Buttons from "./Buttons.jsx"

const Navbar = ({ windowSize }) => (
    <nav className={`fixed w-full flex flex-row ${windowSize.width < 768 ? "justify-center" : ""} justify-between items-center px-4 py-3 bg-black`}>

        <div className="flex flex-row items-center mr-4">
            <Buttons type="hamburger" />
            {windowSize.width > 768 ? (
                <a href="#home" className="hover:cursor-pointer relative ml-8">
                    <img src="src\assets\youtube-logo-white.svg" height={105} width={105} alt="logo" className="min-w-[105px]" />
                    <span className="absolute right-0 text-[10px] font-bold italic tracking-wide">Clone</span>
                </a>
            ) : (
                null
            )}
        </div>

        <div className={`flex flex-row items-center ${windowSize.width < 768 ? "w-full" : "w-[50%]"} max-w-[700px]`}>
            <SearchBar />
            {windowSize.width > 768 ? (
                <Buttons type="voice" />
            ) : (
                null
            )}
        </div>

        <div className="flex flex-row items-center">
            {windowSize.width > 768 ? (
                <>
                    <Buttons type="create" />
                    <Buttons type="notification" />
                    <Buttons type="profile" />
                </>
            ) : (
                null
            )}
        </div>
    </nav>
)

export default Navbar
