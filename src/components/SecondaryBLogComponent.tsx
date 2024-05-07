"use client"
import Image from 'next/image';
import iconwrap from '../assets/iconwrap.svg';


type propsType={
    image:string,
    author:string,
    guide:string,
    topic:string
}
export default function SecondaryBLogComponent(props:propsType) {
return (
<div className="col-span-6 flex flex-col justify-start mb-2">
    
    <div className="col-span-6 flex flex-row justify-start">
        <div className='col-span-6 min-h-fit w-[40%]'>
        <Image src={props.image} alt="primary-blog-image" className='h-fit w-fit'/>
        </div>
        
        <div className="postCardContent w-[60%] ml-2">
                <div className="cardTextHeading w-full">
                    <p className='w-full author text-[#6941c6] text-xs mb-3'>{props.author}</p>
                    <div className='blogHeadingIcon flex flex-row min-w-full justify-between'>
                        <a href="#" className='guide text-sm font-semibold text-[#101828] mb-3'>{props.guide}</a>  
                        
                    </div>
                    <p className='about text-sm text-[#475467] mb-3'>
                       {props.topic}
                    </p>
                </div>
                <div className="categories flex flex-row">
                    <div className='badge border m-2 sub-design text-[#026aa2] text-xs rounded-2xl p-1 bg-[#F0F9FF]'><p>Design</p></div>
                    <div className='badge border m-2 sub-research text-[#c11574] text-xs rounded-2xl p-1 bg-[#FDF2FA]'><p>Research</p></div>
                </div>
        </div>
    

</div>
</div>)
}