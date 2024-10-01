import Buttons from "./Buttons"
import ProfileButtons from "./ProfileButtons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser, faUpload, faPenToSquare, faSatelliteDish, faGear } from "@fortawesome/free-solid-svg-icons"

const Modals = ({ modalType, handleModalClose }) => {

    switch (modalType) {
        case 'voice':
            return (
                <div className="fixed flex flex-col justify-evenly items-center top-[72px] left-1/2 -translate-x-1/2 bg-greyAlt w-[600px] h-[400px] rounded-2xl z-50">
                    <div className="absolute top-4 right-4">
                        <Buttons type="clearModal" handleModalClose={handleModalClose} />
                    </div>
                    <div className="max-w-[350px]">
                        <h1 className="text-3xl text-center">Search with voice</h1>
                        <p className="text-gray-400 text-center mt-4">To search by voice, go to your browser settings and allow access to microphone.</p>
                    </div>
                    <Buttons type="voiceModal" />
                </div>
            )
        case 'create':
            return (
                <div className="fixed flex flex-col justify-center items-center h-[180px] top-[75px] right-[130px] rounded-2xl z-50">
                    <button className="flex justify-start items-center px-6 py-4 hover:bg-grey bg-greyAlt w-full rounded-t-2xl">
                        <div className="text-xl mr-4">
                            <FontAwesomeIcon icon={faUpload} />
                        </div>
                        Upload Video
                    </button>
                    <button className="flex justify-start items-center px-6 py-4 hover:bg-grey bg-greyAlt w-full border-y-[1px] border-y-grey">
                        <div className=" text-xl mr-4">
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </div>
                        Create Post
                    </button>
                    <button className="flex justify-start items-center px-6 py-4 hover:bg-grey bg-greyAlt w-full rounded-b-2xl">
                        <div className=" text-2xl mr-4">
                            <FontAwesomeIcon icon={faSatelliteDish} />
                        </div>
                        Go Live
                    </button>
                </div>
            )
        case 'notification':
            return (
                <div className="fixed flex flex-col justify-start items-center min-h-[150px] h-[800px] max-h-[calc(100vh-100px)] bg-grey w-[500px] top-[72px] right-[80px] rounded-2xl z-50 overflow-hidden">

                    <div className="flex justify-between items-center text-start w-full border-b-[1px] border-grey pr-4 pl-8 py-4">
                        <h1 className="w-full text-start text-[19px] ">Notifications</h1>
                        <button
                            className='flex justify-center items-center rounded-full aspect-square text-2xl h-12 w-12 hover:bg-highlight' >
                            <FontAwesomeIcon icon={faGear} className="object-cover" />
                        </button>
                    </div>

                    <div className="overflow-auto w-full">
                        {Array(30).fill(null).map((_, index) => (
                            <button key={index} className="flex justify-start items-center p-4 px-6 hover:bg-grey bg-greyAlt w-full border-b-[1px] border-grey">
                                <FontAwesomeIcon icon={faCircleUser} className="w-12 h-12 rounded-full" />
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
                <div className="fixed flex flex-col justify-start items-start bg-greyAlt w-[350px] min-h-[200px] max-h-[calc(100vh-100px)] top-[72px] right-[20px] rounded-2xl z-50 overflow-hidden">
                    <div className="flex justify-center items-start w-full px-6 py-7 bg-grey rounded-t-2xl">

                        <FontAwesomeIcon icon={faCircleUser} className="w-12 h-12 object-cover rounded-full" />

                        <div className="flex flex-col justify-start items-start ml-8 text-[17px]">
                            <span>Username</span>
                            <span>@usernameID</span>
                            <a href="" className="text-blue-400 mt-4 hover:text-blue-300 hover:underline">View your channel</a>
                        </div>

                    </div>

                    <div className="flex flex-col justify-start items-start w-full overflow-auto">

                        <ProfileButtons text="Google Account" index={1} />
                        <ProfileButtons text="Switch Account" index={2} />
                        <ProfileButtons text="Sign Out" index={3} />

                        <hr className="border-blackAlt w-full" />

                        <ProfileButtons text="Youtube Clone Studio" index={4} />
                        <ProfileButtons text="Purchases and Memberships" index={5} />

                        <hr className="border-blackAlt w-full" />

                        <ProfileButtons text="Your Data in Youtube Clone" index={6} />
                        <ProfileButtons text="Appearance : Device Theme" index={7} />
                        <ProfileButtons text="Language : English" index={8} />
                        <ProfileButtons text="Restricted Mode : Off" index={9} />
                        <ProfileButtons text="Location : Unavailable" index={10} />
                        <ProfileButtons text="Keyboard Shortcuts" index={11} />

                        <hr className="border-blackAlt w-full" />

                        <ProfileButtons text="Settings" index={12} />

                        <hr className="border-blackAlt w-full" />

                        <ProfileButtons text="Help" index={13} />
                        <ProfileButtons text="Send Feedback" index={14} />

                    </div>
                </div>
            )
    }
}

export default Modals
