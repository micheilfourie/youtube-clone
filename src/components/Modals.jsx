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
                    <button className="p-4 hover:bg-grey bg-greyAlt w-full border-y-[1px] border-y-whiteAlt">
                        Create Post
                    </button>
                    <button className="p-4 hover:bg-grey bg-greyAlt w-full rounded-b-2xl">
                        Go Live
                    </button>
                </div>
            )
        case 'notification':
            return (
                <div className="fixed flex flex-col justify-start items-center min-h-[600px] bg-grey w-[500px] max-h-[600px] top-[72px] right-[80px] rounded-2xl z-50 overflow-hidden">
                    <div className="text-start w-full border-b-[1px] border-whiteAlt">
                        <h1 className="px-8 py-5 w-full text-start text-[19px] ">Notifications</h1>
                    </div>
                    <div className="overflow-auto w-full">
                        {Array(10).fill(null).map((_, index) => (
                            <button key={index} className="flex justify-start items-center p-4 px-6 hover:bg-grey bg-greyAlt w-full border-b-[1px] border-whiteAlt">
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
                <div className="fixed flex flex-col justify-start items-start bg-greyAlt w-[350px] top-[72px] right-[20px] rounded-2xl z-50 overflow-hidden">
                    <div className="flex justify-startitems-start w-full px-8 py-6 border-b-[1px] bg-grey rounded-t-2xl border-whiteAlt">

                        <FontAwesomeIcon icon={faCircleUser} className="w-12 h-12 object-cover rounded-full" />

                        <div className="flex flex-col justify-start items-start ml-8 text-[17px]">
                            <span>Username</span>
                            <span>@usernameID</span>
                            <a href="" className="text-blue-400 mt-4 hover:text-blue-300 hover:underline">View your channel</a>
                        </div>

                    </div>
                    <div className="flex flex-col justify-start items-start w-full border-b-[1px] border-whiteAlt">

                        <Buttons type="profileModal" iconIndex={1} profileModalBtnText="Google Account" />
                        <Buttons type="profileModal" iconIndex={2} profileModalBtnText="Switch Account" />
                        <Buttons type="profileModal" iconIndex={3} profileModalBtnText="Sign Out" />

                    </div>
                    <div className="flex flex-col justify-start items-start w-full border-b-[1px] border-whiteAlt">

                        <Buttons type="profileModal" iconIndex={4} profileModalBtnText="YouTube Clone Studio" />
                        <Buttons type="profileModal" iconIndex={5} profileModalBtnText="Purchases and Memberships" />

                    </div>
                    <div className="flex flex-col justify-start items-start w-full border-b-[1px] border-whiteAlt">

                        <Buttons type="profileModal" iconIndex={6} profileModalBtnText="Your Data in TouTube Clone" />
                        <Buttons type="profileModal" iconIndex={7} profileModalBtnText="Appearance : Device Theme" />
                        <Buttons type="profileModal" iconIndex={8} profileModalBtnText="Language : English" />
                        <Buttons type="profileModal" iconIndex={9} profileModalBtnText="Restrictions Mode : Off" />
                        <Buttons type="profileModal" iconIndex={10} profileModalBtnText="Location : Unavailable" />
                        <Buttons type="profileModal" iconIndex={11} profileModalBtnText="Keyboard Shortcuts" />

                    </div>
                    <div className="flex flex-col justify-start items-start w-full border-b-[1px] border-whiteAlt">

                        <Buttons type="profileModal" iconIndex={12} profileModalBtnText="Settings" />

                    </div>
                    <div className="flex flex-col justify-start items-start w-full">

                        <Buttons type="profileModal" iconIndex={13} profileModalBtnText="Help" />
                        <Buttons type="profileModal" iconIndex={14} profileModalBtnText="Send Feedback" />

                    </div>
                </div>
            )
    }
}

export default Modals
