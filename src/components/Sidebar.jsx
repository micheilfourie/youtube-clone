import Buttons from "./Buttons"

const Sidebar = () => {
    return (
        <nav className="w-[100px] flex justify-center items-center text-center text-[12px] font-semibold">
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
