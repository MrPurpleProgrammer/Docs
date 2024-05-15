'use client';
import Image from 'next/image';
import iconwrap from '../assets/iconwrap.svg';

type propsType = {
  image: string;
  author: string;
  guide: string;
  topic: string;
};
const SecondaryBLogComponent = (props: propsType) => (
  <div className="flex flex-row justify-start py-2 bg-background text-foreground">
    <div className="min-h-fit w-[40%] relative overflow-hidden">
      <Image
        src={props.image}
        alt="sec-blog-image"
        className="object-cover cursor-pointer hover:scale-105 ease-in duration-200"
        fill
      />
    </div>

    <div className="postCardContent w-[60%] px-3">
      <div className="cardTextHeading w-full">
        <p className="w-full author text-[#6941c6] text-[10px] xmd:text-xs py-2">{props.author}</p>
        <div className="blogHeadingIcon flex flex-row min-w-full justify-between">
          <a href="#" className="guide text-xs xmd:text-sm font-semibold py-2">
            {props.guide}
          </a>
        </div>
        <p className="about text-xs xmd:text-sm py-3">{props.topic}</p>
      </div>
      <div className="categories flex flex-row gap-2">
        <div className="badge border sub-design text-[#026aa2] text-[10px] xmd:text-xs rounded-2xl p-1 bg-[#F0F9FF]">
          <p>Design</p>
        </div>
        <div className="badge border sub-research text-[#c11574] text-[10px] xmd:text-xs rounded-2xl p-1 bg-[#FDF2FA]">
          <p>Research</p>
        </div>
      </div>
    </div>
  </div>
);
export default SecondaryBLogComponent;
