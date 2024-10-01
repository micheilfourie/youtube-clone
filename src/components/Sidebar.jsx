import SidebarIcons from "./SidebarIcons"
import SidebarButtons from "./SidebarIcons"

const Sidebar = ({ expandSidebar }) => {

    return (

        !expandSidebar ? (

            <nav className="fixed top-0 w-[80px] h-[100vh] flex justify-center items-start bg-black z-20 mt-[72px]">
                <ul className="w-full mx-1">
                    <li className="flex flex-col justify-center items-center mb-2 p-3 hover:cursor-pointer hover:bg-greyAlt w-full rounded-r-xl">
                        <SidebarIcons type='home' />
                        <span className="text-[13px] mt-4 ">Home</span>
                    </li>
                    <li className="flex flex-col justify-center items-center mb-2 p-3 hover:cursor-pointer hover:bg-greyAlt w-full rounded-r-xl">
                        <SidebarIcons type='shorts' />
                        <span className="text-[13px] mt-4 ">Shorts</span>
                    </li>
                    <li className="flex flex-col justify-center items-center mb-2 p-3 hover:cursor-pointer hover:bg-greyAlt w-full rounded-r-xl">
                        <SidebarIcons type='subscriptions' />
                        <span className="text-[13px] mt-4 ">Subs</span>
                    </li>
                    <li className="flex flex-col justify-center items-center mb-2 p-3 hover:cursor-pointer hover:bg-greyAlt w-full rounded-r-xl">
                        <SidebarIcons type='you' />
                        <span className="text-[13px] mt-4 ">You</span>
                    </li>
                </ul>
            </nav>

        ) : (

            <nav className="fixed top-0 w-[250px] h-[100vh] flex justify-start items-start bg-black z-20 overflow-auto mt-[72px]">

                <ul className="w-full mx-1 pb-20">

                    <hr className="border-blackAlt w-full mb-2" />

                    <li className="flex justify-start items-center  pl-3 py-2.5 hover:cursor-pointer hover:bg-greyAlt w-full rounded-xl">
                        <SidebarIcons type='home' />
                        <span className="text-[16px] ml-2">Home</span>
                    </li>
                    <li className="flex justify-start items-center  pl-3 py-2.5 hover:cursor-pointer hover:bg-greyAlt w-full rounded-xl">
                        <SidebarIcons type='shorts' />
                        <span className="text-[16px] ml-2">Shorts</span>
                    </li>
                    <li className="flex justify-start items-center  pl-3 py-2.5 hover:cursor-pointer hover:bg-greyAlt w-full rounded-xl">
                        <SidebarIcons type='subscriptions' />
                        <span className="text-[16px] ml-2">Subscriptions</span>
                    </li>

                    <hr className="border-blackAlt w-full my-2" />

                    <li className="flex justify-start items-center  pl-3 py-2.5 hover:cursor-pointer hover:bg-greyAlt w-full rounded-xl">
                        <span className="text-[18px] font-semibold ml-2">You</span>
                        <SidebarIcons type='right' />
                    </li>

                    <li className="flex justify-start items-center  pl-3 py-2.5 hover:cursor-pointer hover:bg-greyAlt w-full rounded-xl">
                        <SidebarIcons type='user' />
                        <span className="text-[16px] ml-2">Your Channel</span>
                    </li>

                    <li className="flex justify-start items-center  pl-3 py-2.5 hover:cursor-pointer hover:bg-greyAlt w-full rounded-xl">
                        <SidebarIcons type='history' />
                        <span className="text-[16px] ml-2">History</span>
                    </li>

                    <li className="flex justify-start items-center  pl-3 py-2.5 hover:cursor-pointer hover:bg-greyAlt w-full rounded-xl">
                        <SidebarIcons type='playlist' />
                        <span className="text-[16px] ml-2">Playlists</span>
                    </li>

                    <li className="flex justify-start items-center  pl-3 py-2.5 hover:cursor-pointer hover:bg-greyAlt w-full rounded-xl">
                        <SidebarIcons type='videos' />
                        <span className="text-[16px] ml-2">Your Videos</span>
                    </li>

                    <li className="flex justify-start items-center  pl-3 py-2.5 hover:cursor-pointer hover:bg-greyAlt w-full rounded-xl">
                        <SidebarIcons type='later' />
                        <span className="text-[16px] ml-2">Watch Later</span>
                    </li>

                    <li className="flex justify-start items-center  pl-3 py-2.5 hover:cursor-pointer hover:bg-greyAlt w-full rounded-xl">
                        <SidebarIcons type='like' />
                        <span className="text-[16px] ml-2">Liked Videos</span>
                    </li>

                    <hr className="border-blackAlt w-full my-2" />

                    <li className="flex justify-start items-center  pl-3 py-2.5 hover:cursor-pointer hover:bg-greyAlt w-full rounded-xl">
                        <span className="text-[18px] font-semibold ml-2">Subscriptions</span>
                    </li>

                    {Array(5).fill(null).map((_, index) => (
                        <li key={index} className="flex justify-start items-center  pl-3 py-2.5 hover:cursor-pointer hover:bg-greyAlt w-full rounded-xl">
                            <SidebarIcons type='profile' />
                            <span className="text-[16px] ml-2">Creator Name</span>
                        </li>
                    ))}

                    <li className="flex justify-start items-center  pl-3 py-2.5 hover:cursor-pointer hover:bg-greyAlt w-full rounded-xl">
                        <SidebarIcons type='down' />
                        <span className="text-[16px] ml-2">Show More</span>
                    </li>

                    <hr className="border-blackAlt w-full my-2" />

                    <li className="flex justify-start items-center  pl-3 py-2.5 hover:cursor-pointer hover:bg-greyAlt w-full rounded-xl">
                        <span className="text-[18px] font-semibold ml-2">Explore</span>
                    </li>

                    <li className="flex justify-start items-center  pl-3 py-2.5 hover:cursor-pointer hover:bg-greyAlt w-full rounded-xl">
                        <SidebarIcons type='trend' />
                        <span className="text-[16px] ml-2">Trending</span>
                    </li>
                    <li className="flex justify-start items-center  pl-3 py-2.5 hover:cursor-pointer hover:bg-greyAlt w-full rounded-xl">
                        <SidebarIcons type='music' />
                        <span className="text-[16px] ml-2">Music</span>
                    </li>
                    <li className="flex justify-start items-center  pl-3 py-2.5 hover:cursor-pointer hover:bg-greyAlt w-full rounded-xl">
                        <SidebarIcons type='game' />
                        <span className="text-[16px] ml-2">Gaming</span>
                    </li>
                    <li className="flex justify-start items-center  pl-3 py-2.5 hover:cursor-pointer hover:bg-greyAlt w-full rounded-xl">
                        <SidebarIcons type='news' />
                        <span className="text-[16px] ml-2">News</span>
                    </li>
                    <li className="flex justify-start items-center  pl-3 py-2.5 hover:cursor-pointer hover:bg-greyAlt w-full rounded-xl">
                        <SidebarIcons type='sport' />
                        <span className="text-[16px] ml-2">Sports</span>
                    </li>
                    <li className="flex justify-start items-center  pl-3 py-2.5 hover:cursor-pointer hover:bg-greyAlt w-full rounded-xl">
                        <SidebarIcons type='podcast' />
                        <span className="text-[16px] ml-2">Podcasts</span>
                    </li>

                    <hr className="border-blackAlt w-full my-2" />

                    <li className="flex justify-start items-center  pl-3 py-2.5 hover:cursor-pointer hover:bg-greyAlt w-full rounded-xl">
                        <SidebarIcons type='settings' />
                        <span className="text-[16px] ml-2">Settings</span>
                    </li>
                    <li className="flex justify-start items-center  pl-3 py-2.5 hover:cursor-pointer hover:bg-greyAlt w-full rounded-xl">
                        <SidebarIcons type='report' />
                        <span className="text-[16px] ml-2">Report History</span>
                    </li>
                    <li className="flex justify-start items-center  pl-3 py-2.5 hover:cursor-pointer hover:bg-greyAlt w-full rounded-xl">
                        <SidebarIcons type='help' />
                        <span className="text-[16px] ml-2">Help</span>
                    </li>
                    <li className="flex justify-start items-center  pl-3 py-2.5 hover:cursor-pointer hover:bg-greyAlt w-full rounded-xl">
                        <SidebarIcons type='feedback' />
                        <span className="text-[16px] ml-2">Send Feedback</span>
                    </li>

                </ul>
            </nav>
        ))
}

export default Sidebar
