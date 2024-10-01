import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faG, faRepeat, faArrowRightFromBracket, faPhotoFilm, faFileInvoiceDollar, faDatabase, faBorderTopLeft, faLanguage, faToggleOff, faCompass, faKeyboard, faGear, faCircleQuestion, faRss } from "@fortawesome/free-solid-svg-icons"

const profileModalIcons = {

    // Btn Index : Icon

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

const ProfileButtons = ({ text, index }) => {
    return (
        <button className="flex justify-start items-center w-full text-start hover:bg-grey py-3.5 px-6">
            <div className="flex justify-center items-center mr-6 text-2xl w-8 h-8">
                <FontAwesomeIcon icon={profileModalIcons[index]} />
            </div>
            {text}
        </button>
    )
}

export default ProfileButtons
