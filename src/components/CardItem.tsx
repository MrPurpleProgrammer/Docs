import Image from 'next/image';
import iconwrap from '../assets/iconwrap.svg';
import mappin from '../assets/mappin.svg';
import clock from '../assets/clock.svg';
export default function CardItem(){
    return(<div className="w-[300px] h-[100px] bg-white rounded-xl p-3 mr-4 mb-4">
        
                <div className="content-container flex flex-col">
                    <div className="heading-container flex flex-row justify-between mb-2">
                        <div className="flex flex-col justify-between">
                            <p className="text-[#6941c6] text-xs">Developer Docs</p>
                        
                            <h1 className="text-[#101828] text-sm font-semibold">Quick Start</h1>
                        </div>
                        <button className="text-[#6941c6] text-xs self-start flex flex-row font-bold">
                            View Docs<Image src={iconwrap} width={17} height={20} alt="navigate-icon" className='self-start pl-1 text-[#6941c6] external-link'/></button>
                    </div>
                    <div className="image-components flex flex-row">
                        <div className="pr-5 text-sm flex flex-row"><Image src={mappin} width={17} height={20} alt="navigate-icon" className='self-center pr-1 text-[#6941c6]'/><p className='text-[#475467] text-sm'>API</p></div>
                        <div className="pr-5 text-sm flex flex-row"><Image src={clock} width={17} height={20} alt="navigate-icon" className='self-center pr-1 text-[#6941c6]'/><p className='text-[#475467] text-sm'>20 Min Read</p></div>
                    </div>
                </div> 
        </div>)
}