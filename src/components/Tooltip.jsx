import { useState } from "react"

const locations = {
    bottom: "top-20 left-1/2 -translate-x-1/2",
    // create more direction styling here if
}

const Tooltip = ({ text, children, direction }) => {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <div
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            className="relative"
        >
            {children}
            {isVisible ? (
                <span className={`absolute ${locations[direction]} bg-greyAlt text-white text-sm px-6 py-2 rounded-full whitespace-nowrap bg-opacity-80`}>{text}</span>
            ) : null}
        </div>
    )

}

export default Tooltip
