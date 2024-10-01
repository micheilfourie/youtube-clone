import SearchBar from "./SearchBar.jsx"
import Buttons from "./Buttons.jsx"
import logo from "../assets/youtube-logo-white.svg";

const Navbar = ({ windowSize, handleModalDisplay, modalOpen, handleSidebarExpand }) => {

    return (
        <nav className={`fixed top-0 w-full flex flex-row ${windowSize.width < 768 ? "justify-center" : ""} justify-between items-center pl-4 ${modalOpen ? "pr-[1.75rem]" : "pr-4"} py-3 bg-black z-30`}>

            <div className="flex flex-row items-center mr-4">
                <Buttons type="hamburger" handleSidebarExpand={handleSidebarExpand} />
                {windowSize.width >= 768 ? (
                    <div onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })} className="hover:cursor-pointer relative ml-8">
                        <img src={logo} width={105} alt="logo" className="min-w-[105px]" />
                        <span className="absolute right-0 text-[10px] font-semibold italic tracking-wide">Clone</span>
                    </div>
                ) : (
                    null
                )}
            </div>

            <div className={`flex flex-row items-center ${windowSize.width <= 768 ? "w-full" : "w-[50%]"} max-w-[700px]`}>
                <SearchBar />
                {windowSize.width >= 768 ? (
                    <div className="ml-5">
                        <Buttons type="voice" handleModalDisplay={handleModalDisplay} />
                    </div>

                ) : (
                    null
                )}
            </div>

            <div className="flex flex-row items-center">
                {windowSize.width >= 768 ? (
                    <>
                        <Buttons type="create" handleModalDisplay={handleModalDisplay} />
                        <Buttons type="notification" handleModalDisplay={handleModalDisplay} />
                        <Buttons type="profile" handleModalDisplay={handleModalDisplay} />
                    </>
                ) : (
                    null
                )}
            </div>
        </nav>
    )
}
export default Navbar
