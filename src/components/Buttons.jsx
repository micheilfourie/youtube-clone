import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faMicrophone, faVideo, faBell, faCircleUser, faInfo, faHouse, faClapperboard, faUserGroup, faAddressBook, faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tooltip from "./Tooltip";

const Buttons = ({ type, clearText, handleModalDisplay, handleModalClose }) => {

    switch (type) {
        case 'hamburger':
            return (
                <button className="flex justify-center items-center p-4 rounded-full text-2xl h-12 w-12 hover:bg-grey">
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
        case 'voiceModal':
            return (
                <button
                    className='flex justify-center items-center p-4 bg-greyAlt rounded-full text-4xl h-[90px] w-[90px] hover:bg-[#3a3a3a]'>
                    <FontAwesomeIcon icon={faMicrophone} className="object-cover" />
                </button>
            )
        case 'create':
            return (
                <Tooltip text={"Create"} direction={"bottom"}>
                    <button className='flex justify-center items-center p-4 rounded-full text-lg h-12 w-12 hover:bg-grey mx-1'>
                        <FontAwesomeIcon icon={faVideo} className="object-cover" />
                    </button>
                </Tooltip>
            )
        case 'notification':
            return (
                <Tooltip text={"Notifications"} direction={"bottom"}>
                    <button className='flex justify-center items-center p-4 rounded-full text-lg h-12 w-12 hover:bg-grey mx-1'>
                        <FontAwesomeIcon icon={faBell} className="object-cover" />
                    </button>
                </Tooltip>
            )
        case 'profile':
            return (
                <button className='flex justify-center items-center p-4 rounded-full text-[44px] h-12 w-12 mx-1'>
                    <FontAwesomeIcon icon={faCircleUser} className="object-cover" />
                </button>
            )
        case 'home':
            return (
                <button className="flex flex-col justify-center items-center hover:bg-grey rounded-lg w-full px-4 pb-4">
                    <div className='flex justify-center p-4 rounded-full text-lg h-12 w-12 mx-1'>
                        <FontAwesomeIcon icon={faHouse} className="object-cover" />
                    </div>
                    <span className="text-[12px] font-semibold">Home</span>
                </button>
            )
        case 'shorts':
            return (
                <button className="flex flex-col justify-center items-center hover:bg-grey rounded-lg w-full px-4 pb-4">
                    <div className='flex justify-center p-4 rounded-full text-lg h-12 w-12 mx-1'>
                        <FontAwesomeIcon icon={faClapperboard} className="object-cover" />
                    </div>
                    <span className="text-[12px] font-semibold">Shorts</span>
                </button>
            )
        case 'subscriptions':
            return (
                <button className="flex flex-col justify-center items-center hover:bg-grey rounded-lg w-full px-4 pb-4">
                    <div className='flex justify-center p-4 rounded-full text-lg h-12 w-12 mx-1'>
                        <FontAwesomeIcon icon={faUserGroup} className="object-cover" />
                    </div>
                    <span className="text-[12px] font-semibold">Subs</span>
                </button>
            )
        case 'you':
            return (
                <button className="flex flex-col justify-center items-center hover:bg-grey rounded-lg w-full pb-4">
                    <div className='flex justify-center p-4 rounded-full text-lg h-12 w-12 mx-1'>
                        <FontAwesomeIcon icon={faAddressBook} className="object-cover" />
                    </div>
                    <span className="text-[12px] font-semibold">You</span>
                </button>
            )
        case 'clear':
            return (
                <button
                    onClick={clearText}
                    className='flex justify-center items-center rounded-full text-xl h-10 w-10 hover:bg-grey' >
                    <FontAwesomeIcon icon={faXmark} className="object-cover" />
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
        case 'submit':
            return (
                <Tooltip text={"Search"} direction={"bottom"}>
                    <button className="text-center text-[17px] bg-grey rounded-r-full h-[46px] pr-6 pl-5 hover:bg-greyAlt ">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </Tooltip>
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
