export default function CardItem(){
    return(<div className="w-[400px] h-[100px] bg-white rounded-xl p-4 mr-4 mb-4">
                <div className="content-container flex flex-col">
                    <div className="heading-container flex flex-row justify-between">
                        <div>
                            <p>Developer Docs</p>
                        
                            <h1>Quick Start</h1>
                        </div>
                        <button>View All</button>
                    </div>
                    <div className="image-components flex flex-row">
                        <div className="pr-5"><p>API</p></div>
                        <div className="pr-5"><p>20 Min Read</p></div>
                    </div>
                </div> 
        </div>)
}