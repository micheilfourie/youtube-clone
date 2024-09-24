import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faMicrophone, faVideo, faBell, faUser } from '@fortawesome/free-solid-svg-icons';

const Buttons = ({ type }) => {

    switch (type) {
        case 'hamburger':
            return (
                <button className="flex justify-center items-center p-4 rounded-full text-2xl h-11 w-11 hover:bg-grey transition-all mr-8">
                    <FontAwesomeIcon icon={faBars} className="object-cover" />
                </button>
            )
        case 'voice':
            return (
                <button className='flex justify-center items-center p-4 bg-grey rounded-full text-xl h-11 w-11 ml-5 hover:bg-[#313131] transition-all'>
                    <FontAwesomeIcon icon={faMicrophone} className="object-cover" />
                </button>
            )
        case 'create':
            return (
                <button className='flex justify-center items-center p-4 rounded-full text-lg h-11 w-11 hover:bg-grey transition-all mx-1'>
                    <FontAwesomeIcon icon={faVideo} className="object-cover" />
                </button>
            )
        case 'notification':
            return (
                <button className='flex justify-center items-center p-4 rounded-full text-lg h-11 w-11 hover:bg-grey transition-all mx-1'>
                    <FontAwesomeIcon icon={faBell} className="object-cover" />
                </button>
            )
        case 'profile':
            return (
                <button className='flex justify-center items-center p-4 bg-grey rounded-full text-xl h-11 w-11 mx-1 hover:bg-[#313131] transition-all'>
                    <FontAwesomeIcon icon={faUser} className="object-cover" />
                </button>
            )
        default:
            return null
    }
}

export default Buttons
