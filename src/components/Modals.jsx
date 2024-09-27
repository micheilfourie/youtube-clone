import Buttons from "./Buttons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"

const Modals = ({ modalType, handleModalClose }) => {

    switch (modalType) {
        case 'voice':
            return (
                <div className="fixed flex flex-col justify-evenly items-center top-[72px] left-1/2 -translate-x-1/2 bg-blackAlt w-[600px] h-[400px] rounded-2xl z-50">
                    <div className="absolute top-4 right-4">
                        <Buttons type="clearModal" handleModalClose={handleModalClose} />
                    </div>
                    <div className="max-w-[350px]">
                        <h1 className="text-3xl text-center">Search with voice</h1>
                        <p className="text-gray-400 text-center mt-2">To search by voice, go to your browser settings and allow access to microphone.</p>
                    </div>
                    <Buttons type="voiceModal" />
                </div>
            )
        case 'create':
            return (
                <div className="fixed flex flex-col justify-center items-center w-[180px] h-[180px] top-[72px] right-[130px] rounded-2xl z-50">
                    <button className="p-4 hover:bg-grey bg-greyAlt w-full rounded-t-2xl">
                        Upload Video
                    </button>
                    <button className="p-4 hover:bg-grey bg-greyAlt w-full border-y-[1px] border-y-black">
                        Create Post
                    </button>
                    <button className="p-4 hover:bg-grey bg-greyAlt w-full rounded-b-2xl">
                        Go Live
                    </button>
                </div>
            )
        case 'notification':
            return (
                <div className="fixed flex flex-col justify-start items-center min-h-[600px] bg-grey w-[500px] max-h-[600px] top-[72px] right-[80px] rounded-2xl z-50">
                    <div className="text-start w-full border-y-[1px] border-black">
                        <h1 className="px-8 py-5 w-full text-start text-[19px] ">Notifications</h1>
                    </div>
                    <div className="overflow-y-auto w-full">
                        {Array(10).fill(null).map((_, index) => (
                            <button key={index} className="flex justify-start items-center p-4 px-6 hover:bg-grey bg-greyAlt w-full border-b-[1px] border-black">
                                <FontAwesomeIcon icon={faCircleUser} className="w-12 h-12 object-cover rounded-full" />
                                <div className="flex flex-col justify-start items-start ml-8">
                                    <span className="">Notification Placeholder</span>
                                    <span className="text-xs text-gray-400">1 hour ago</span>
                                </div>

                            </button>
                        ))}
                    </div>
                </div>
            )
        case 'profile':
            return (
                <div className="fixed flex flex-col justify-start items-start bg-greyAlt w-[330px] top-[72px] right-[20px] rounded-2xl z-50 overflow-hidden">
                    <div className="flex justify-startitems-start w-full px-8 py-6 border-b-[1px] bg-grey rounded-t-2xl border-black">

                        <FontAwesomeIcon icon={faCircleUser} className="w-12 h-12 object-cover rounded-full" />

                        <div className="flex flex-col justify-start items-start ml-8 text-[17px]">
                            <span>Username</span>
                            <span>@usernameID</span>
                            <a href="" className="text-blue-400 mt-4 hover:text-blue-300 hover:underline">View your channel</a>
                        </div>

                    </div>
                    <div className="flex flex-col justify-start items-start w-full border-b-[1px] border-black">
                        <button className="w-full text-start  hover:bg-grey py-4 px-6">Google Account</button>
                        <button className="w-full text-start  hover:bg-grey py-4 px-6">Switch Account</button>
                        <button className="w-full text-start  hover:bg-grey py-4 px-6">Sign Out</button>
                    </div>
                    <div className="flex flex-col justify-start items-start w-full border-b-[1px] border-black">
                        <button className="w-full text-start  hover:bg-grey py-4 px-6">YouTube Clone Studio</button>
                        <button className="w-full text-start  hover:bg-grey py-4 px-6">Purchases and Memberships</button>
                    </div>
                    <div className="flex flex-col justify-start items-start w-full border-b-[1px] border-black">
                        <button className="w-full text-start  hover:bg-grey py-4 px-6">Your Data in TouTube Clone</button>
                        <button className="w-full text-start  hover:bg-grey py-4 px-6">Appearance : Device Theme</button>
                        <button className="w-full text-start  hover:bg-grey py-4 px-6">Restrictions Mode : Off</button>
                        <button className="w-full text-start  hover:bg-grey py-4 px-6">Location : Unavailable</button>
                        <button className="w-full text-start  hover:bg-grey py-4 px-6">Keyboard Shortcuts</button>
                    </div>
                    <div className="flex flex-col justify-start items-start w-full border-b-[1px] border-black">
                        <button className="w-full text-start  hover:bg-grey py-4 px-6">Settings</button>
                    </div>
                    <div className="flex flex-col justify-start items-start w-full">
                        <button className="w-full text-start  hover:bg-grey py-4 px-6">Help</button>
                        <button className="w-full text-start  hover:bg-grey py-4 px-6">Send Feedback</button>
                    </div>
                </div>
            )
    }
}

export default Modals
