const VideoCard = () => (

    <div className="flex flex-col">

        < div className="aspect-video rounded-3xl gradient-bg animate-gradient" >
            {/* thumbnail container */}
        </div >

        <div className="w-full grid grid-cols-6 gap-2 grid-rows-2 mt-2 animate-gradient">

            <div className="flex justify-end items-center ">
                <div className="aspect-square w-14 rounded-full gradient-bg animate-gradient">
                    {/* creator img container */}
                </div>
            </div>

            <div className="col-span-5 rounded-full gradient-bg animate-gradient">
                {/* heading container */}
            </div>

            <div className="col-start-2 col-span-5 rounded-full gradient-bg animate-gradient">
                {/* description container */}
            </div>

        </div>

    </div >

)

export default VideoCard
