import Buttons from "./Buttons"

const Sidebar = () => {
    return (
        <nav className="fixed w-[100px] h-full flex justify-center items-start text-center text-[12px] font-semibold bg-black">
            <ul className="pt-2">
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
