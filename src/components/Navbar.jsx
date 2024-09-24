import SearchBar from "./SearchBar.jsx"
import Buttons from "./Buttons.jsx"

const Navbar = () => (
    <nav className="flex flex-row justify-between items-center px-6 py-2">

        <div className="flex flex-row items-center">
            <Buttons type="hamburger" />
            <a href="#home" className="hover:cursor-pointer">
                <img src="src\assets\youtube-logo-white.svg" height={90} width={90} alt="logo" />
            </a>
        </div>

        <div className="flex flex-row items-center">
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
