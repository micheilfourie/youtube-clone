import Buttons from "./Buttons"

const Sidebar = () => {
    return (
        <nav className="fixed top-0 w-[80px] h-full flex justify-center items-start bg-black z-20">
            <ul className="pt-20">
                <li>
                    <Buttons type='home' />
                </li>
                <li>
                    <Buttons type='shorts' />
                </li>
                <li>
                    <Buttons type='subscriptions' />
                </li>
                <li>
                    <Buttons type='you' />
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar
