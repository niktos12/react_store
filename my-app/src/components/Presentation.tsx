export function Presentation(){
    return(
        <div 
            className="flex flex-row bg-gray-200 justify-around p-20 items-center m:py-20 m:px-10 m:gap-10 xm:px-5 xm:gap-5"
        >
            <div 
                className="flex flex-col"
            >
                <h2 
                    className="text-5xl font-bold m:text-3xl"
                >
                    Welcome to <span 
                        className="text-yellow-500"
                     >
                         Mi
                    </span>
                    Store
                </h2>
                <h3 
                    className="text-3xl m:text-2xl"
                >
                    The best clothes store by company <span className="text-yellow-500">Mi</span>
                </h3>
            </div>
            <div 
                className=""
            >
                <h1 
                    className="text-8xl text-white bg-orange-500 rounded-3xl p-4 rotate-6 shadow-2xl select-none font-bold xs:text-6xl"
                >
                    Mi
                </h1>
            </div>
            
        </div>
    )
}