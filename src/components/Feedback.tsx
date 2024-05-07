import Image from 'next/image';
import star from '../assets/star.svg';
export default function Feedback(){
    return(<div className="flex flex-col col-span-3 w-full">
        <h1 className="font-bold text-[#6941c6] text-lg">Next Docs to Read...</h1>
        <ul className="documents">
            <li><a href="#" className="underline text-[#A7A7A7] text-sm">Selections</a></li>
            <li><a href="#" className="underline text-[#A7A7A7] text-sm">Dynamic properties</a></li>
            <li><a href="#" className="underline text-[#A7A7A7] text-sm">Transformation</a></li>
            <li><a href="#" className="underline text-[#A7A7A7] text-sm">Animations</a></li>
        </ul>
        <div className="mt-8">
            <h1 className="font-bold text-[#6941c6] text-lg">Provide us your Feedback</h1>
            <div className="flex flex-row">
                <Image src={star} alt="star-image" width={20} height={20} className='mr-2'/>
                <Image src={star} alt="star-image" width={20} height={20} className='mr-2'/>
                <Image src={star} alt="star-image" width={20} height={20} className='mr-2'/>
                <Image src={star} alt="star-image" width={20} height={20} className='mr-2'/>
            </div>
            <textarea placeholder='Write something...' className='border rounded-lg bg-white w-[90%] text-sm p-4' rows={5}></textarea>
        </div>
    </div>)
}