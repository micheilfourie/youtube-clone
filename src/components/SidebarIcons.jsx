import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faClapperboard, faUserGroup, faAddressBook, faCircleUser, faChevronDown, faChevronRight, faUser, faClockRotateLeft, faListUl, faVideo, faClock, faThumbsUp, faArrowTrendUp, faMusic, faDice, faNewspaper, faBaseball, faPodcast, faGear, faFlag, faCircleInfo, faRss } from '@fortawesome/free-solid-svg-icons'

const SidebarIcons = ({ type }) => {

    switch (type) {

        case 'home':
            return (
                <div className='flex justify-center items-center text-xl w-12'>
                    <FontAwesomeIcon icon={faHouse} className="object-cover" />
                </div>
            )
        case 'shorts':
            return (
                <div className='flex justify-center items-center text-xl w-12'>
                    <FontAwesomeIcon icon={faClapperboard} className="object-cover" />
                </div>
            )
        case 'subscriptions':
            return (
                <div className='flex justify-center items-center text-xl w-12'>
                    <FontAwesomeIcon icon={faUserGroup} className="object-cover" />
                </div>
            )
        case 'you':
            return (
                <div className='flex justify-center items-center text-xl w-12'>
                    <FontAwesomeIcon icon={faAddressBook} className="object-cover" />
                </div>
            )
        case 'profile':
            return (
                <div className='flex justify-center items-center text-2xl w-12'>
                    <FontAwesomeIcon icon={faCircleUser} className="object-cover" />
                </div>
            )
        case 'down':
            return (
                <div className='flex justify-center items-center text-xl w-12'>
                    <FontAwesomeIcon icon={faChevronDown} className="object-cover" />
                </div>
            )
        case 'right':
            return (
                <div className='flex justify-center items-center text-lg w-12'>
                    <FontAwesomeIcon icon={faChevronRight} className="object-cover" />
                </div>
            )
        case 'user':
            return (
                <div className='flex justify-center items-center text-xl w-12'>
                    <FontAwesomeIcon icon={faUser} className="object-cover" />
                </div>
            )
        case 'history':
            return (
                <div className='flex justify-center items-center text-xl w-12'>
                    <FontAwesomeIcon icon={faClockRotateLeft} className="object-cover" />
                </div>
            )
        case 'playlist':
            return (
                <div className='flex justify-center items-center text-xl w-12'>
                    <FontAwesomeIcon icon={faListUl} className="object-cover" />
                </div>
            )
        case 'videos':
            return (
                <div className='flex justify-center items-center text-xl w-12'>
                    <FontAwesomeIcon icon={faVideo} className="object-cover" />
                </div>
            )
        case 'later':
            return (
                <div className='flex justify-center items-center text-xl w-12'>
                    <FontAwesomeIcon icon={faClock} className="object-cover" />
                </div>
            )
        case 'like':
            return (
                <div className='flex justify-center items-center text-xl w-12'>
                    <FontAwesomeIcon icon={faThumbsUp} className="object-cover" />
                </div>
            )
        case 'trend':
            return (
                <div className='flex justify-center items-center text-xl w-12'>
                    <FontAwesomeIcon icon={faArrowTrendUp} className="object-cover" />
                </div>
            )
        case 'music':
            return (
                <div className='flex justify-center items-center text-xl w-12'>
                    <FontAwesomeIcon icon={faMusic} className="object-cover" />
                </div>
            )
        case 'game':
            return (
                <div className='flex justify-center items-center text-xl w-12'>
                    <FontAwesomeIcon icon={faDice} className="object-cover" />
                </div>
            )
        case 'news':
            return (
                <div className='flex justify-center items-center text-xl w-12'>
                    <FontAwesomeIcon icon={faNewspaper} className="object-cover" />
                </div>
            )
        case 'sport':
            return (
                <div className='flex justify-center items-center text-xl w-12'>
                    <FontAwesomeIcon icon={faBaseball} className="object-cover" />
                </div>
            )
        case 'podcast':
            return (
                <div className='flex justify-center items-center text-xl w-12'>
                    <FontAwesomeIcon icon={faPodcast} className="object-cover" />
                </div>
            )
        case 'settings':
            return (
                <div className='flex justify-center items-center text-xl w-12'>
                    <FontAwesomeIcon icon={faGear} className="object-cover" />
                </div>
            )
        case 'report':
            return (
                <div className='flex justify-center items-center text-xl w-12'>
                    <FontAwesomeIcon icon={faFlag} className="object-cover" />
                </div>
            )
        case 'help':
            return (
                <div className='flex justify-center items-center text-xl w-12'>
                    <FontAwesomeIcon icon={faCircleInfo} className="object-cover" />
                </div>
            )
        case 'feedback':
            return (
                <div className='flex justify-center items-center text-xl w-12'>
                    <FontAwesomeIcon icon={faRss} className="object-cover" />
                </div>
            )
    }
}

export default SidebarIcons
