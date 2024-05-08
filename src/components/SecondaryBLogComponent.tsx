"use client";
import Image from "next/image";
import iconwrap from "../assets/iconwrap.svg";

type propsType = {
  image: string;
  author: string;
  guide: string;
  topic: string;
};
const SecondaryBLogComponent = (props: propsType) => (
  <div className="flex flex-row justify-start mb-2">
    <div className="min-h-fit w-[40%] relative">
      <Image
        src={props.image}
        alt="sec-blog-image"
        className="object-cover"
        fill
      />
    </div>

    <div className="postCardContent w-[60%] ml-2">
      <div className="cardTextHeading w-full">
        <p className="w-full author text-[#6941c6] text-xs mb-3">
          {props.author}
        </p>
        <div className="blogHeadingIcon flex flex-row min-w-full justify-between">
          <a
            href="#"
            className="guide text-sm font-semibold text-[#101828] mb-3"
          >
            {props.guide}
          </a>
        </div>
        <p className="about text-sm text-[#475467] mb-3">{props.topic}</p>
      </div>
      <div className="categories flex flex-row">
        <div className="badge border m-2 sub-design text-[#026aa2] text-xs rounded-2xl p-1 bg-[#F0F9FF]">
          <p>Design</p>
        </div>
        <div className="badge border m-2 sub-research text-[#c11574] text-xs rounded-2xl p-1 bg-[#FDF2FA]">
          <p>Research</p>
        </div>
      </div>
    </div>
  </div>
);
export default SecondaryBLogComponent;
