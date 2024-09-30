import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faMicrophone, faVideo, faBell, faCircleUser, faInfo, faHouse, faClapperboard, faUserGroup, faAddressBook, faXmark, faMagnifyingGlass, faG, faRepeat, faArrowRightFromBracket, faPhotoFilm, faFileInvoiceDollar, faDatabase, faBorderTopLeft, faToggleOff, faCompass, faKeyboard, faGear, faCircleQuestion, faRss, faLanguage } from '@fortawesome/free-solid-svg-icons';
import Tooltip from "./Tooltip";

const profileModalIcons = {
    1: faG,
    2: faRepeat,
    3: faArrowRightFromBracket,
    4: faPhotoFilm,
    5: faFileInvoiceDollar,
    6: faDatabase,
    7: faBorderTopLeft,
    8: faLanguage,
    9: faToggleOff,
    10: faCompass,
    11: faKeyboard,
    12: faGear,
    13: faCircleQuestion,
    14: faRss
};

const Buttons = ({ type, clearText, handleModalDisplay, handleModalClose, profileModalBtnText, iconIndex }) => {

    switch (type) {

        // Navbar Buttons

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

        // SideBar Buttons

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
                    className='flex justify-center items-center p-4 bg-greyAlt rounded-full border-[1px] border-highlight shadow-md text-4xl h-[100px] w-[100px] hover:bg-highlight'>
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

        case 'profileModal':
            return (
                <button className="flex justify-start items-center w-full text-start hover:bg-grey py-3.5 px-6">
                    <div className="flex justify-center items-center mr-4 text-2xl w-8 h-8">
                        <FontAwesomeIcon icon={profileModalIcons[iconIndex]} />
                        {console.log(iconIndex)}
                    </div>
                    {profileModalBtnText}
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
