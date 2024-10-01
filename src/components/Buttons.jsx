import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faMicrophone, faVideo, faBell, faCircleUser, faInfo, faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tooltip from "./Tooltip";

const Buttons = ({ type, clearText, handleModalDisplay, handleModalClose, handleSidebarExpand }) => {

    switch (type) {

        // Navbar Buttons

        case 'hamburger':
            return (
                <button onClick={handleSidebarExpand} className="flex justify-center items-center p-4 rounded-full text-2xl h-12 w-12 hover:bg-grey">
                    <FontAwesomeIcon icon={faBars} className="object-cover" />
                </button>
            )
        case 'voice':
            return (
                <Tooltip text="Search With Voice" direction={"bottom"}>
                    <button
                        onClick={() => handleModalDisplay("voice")}
                        className='flex justify-center items-center p-4 bg-grey rounded-full text-xl h-12 w-12 hover:bg-greyAlt'>
                        <FontAwesomeIcon icon={faMicrophone} className="object-cover" />
                    </button>
                </Tooltip>
            )
        case 'create':
            return (
                <Tooltip text={"Create"} direction={"bottom"}>
                    <button
                        onClick={() => handleModalDisplay("create")}
                        className='flex justify-center items-center p-4 rounded-full text-lg h-12 w-12 hover:bg-grey mx-1'>
                        <FontAwesomeIcon icon={faVideo} className="object-cover" />
                    </button>
                </Tooltip>
            )
        case 'notification':
            return (
                <Tooltip text={"Notifications"} direction={"bottom"}>
                    <button
                        onClick={() => handleModalDisplay("notification")}
                        className='flex justify-center items-center p-4 rounded-full text-lg h-12 w-12 hover:bg-grey mx-1'>
                        <FontAwesomeIcon icon={faBell} className="object-cover" />
                    </button>
                </Tooltip>
            )
        case 'profile':
            return (
                <button
                    onClick={() => handleModalDisplay("profile")}
                    className='flex justify-center items-center p-4 rounded-full text-[44px] h-12 w-12 mx-1'>
                    <FontAwesomeIcon icon={faCircleUser} className="object-cover" />
                </button>
            )

        // SearchBar Buttons    

        case 'clear':
            return (
                <button
                    onClick={clearText}
                    className='flex justify-center items-center rounded-full text-xl h-10 w-10 hover:bg-grey' >
                    <FontAwesomeIcon icon={faXmark} className="object-cover" />
                </button>
            )

        case 'submit':
            return (
                <Tooltip text={"Search"} direction={"bottom"}>
                    <button className="text-center text-[17px] bg-grey rounded-r-full h-[46px] pr-6 pl-5 hover:bg-greyAlt ">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </Tooltip>
            )

        // Modal Buttons

        case 'voiceModal':
            return (
                <button
                    className='flex justify-center items-center p-4 bg-[#292929] rounded-full border-[1px] border-highlight shadow-md text-4xl h-[100px] w-[100px] hover:bg-highlight'>
                    <FontAwesomeIcon icon={faMicrophone} className="object-cover" />
                </button>
            )
        case 'clearModal':
            return (
                <button
                    onClick={handleModalClose}
                    className='flex justify-center items-center rounded-full text-2xl h-10 w-10 hover:text-[white]' >
                    <FontAwesomeIcon icon={faXmark} className="object-cover" />
                </button>
            )

        default:
            return (
                <button className='flex justify-center items-center p-4 bg-grey rounded-full text-xl h-12 w-12 ml-5 hover:bg-[#313131]'>
                    <FontAwesomeIcon icon={faInfo} className="object-cover" />
                </button>
            )
    }
}

export default Buttons
