'use client';
import Image from 'next/image';
import iconwrap from '../assets/iconwrap.svg';

type propsType = {
  image: string;
  author: string;
  guide: string;
  topic: string;
};
export default function BlogItem(props: propsType) {
  return (
    <div className="w-full h-auto bg-background text-foreground">
      <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] overflow-hidden">
        <Image
          src={props.image}
          alt="primary-blog-image"
          fill
          className="object-cover cursor-pointer hover:scale-105 ease-in duration-200"
        />
      </div>

      <div className="postCardContent py-2">
        <div className="cardTextHeading">
          <p className="author text-[#6941c6] text-[10px] xmd:text-xs py-2">{props.author}</p>
          <div className="blogHeadingIcon flex flex-row justify-between">
            <a href="#" className="guide text-sm xmd:text-xl font-semibold py-2">
              {props.guide}
            </a>
            <Image
              src={iconwrap}
              width={20}
              height={20}
              alt="navigate-icon"
              className="blog-external-link self-start cursor-pointer"
            />
          </div>
          <p className="about text-xs xmd:text-sm py-2">{props.topic}</p>
        </div>
        <div className="categories flex flex-row gap-2">
          <div className="badge border main-design text-[#6941c6] text-[10px] xmd:text-xs bg-[#f9f5ff] rounded-2xl p-1">
            <p>Design</p>
          </div>
          <div className="badge border main-research text-[#3538cd] text-[10px] xmd:text-xs bg-[#eef4ff] rounded-2xl p-1">
            <p>Research</p>
          </div>
          <div className="badge border main-presentation text-[#c11574] text-[10px] xmd:text-xs bg-[#fdf2fa] rounded-2xl p-1">
            <p>Presentation</p>
          </div>
        </div>
      </div>
    </div>
  );
}
