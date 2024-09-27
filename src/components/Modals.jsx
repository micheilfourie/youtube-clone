import Buttons from "./Buttons"

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
    }
}

export default Modals
