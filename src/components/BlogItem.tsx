"use client";
import Image from "next/image";
import iconwrap from "../assets/iconwrap.svg";

type propsType = {
  image: string;
  author: string;
  guide: string;
  topic: string;
};
export default function BlogItem(props: propsType) {
  return (
    <div className="w-full h-auto">
      <div className="relative w-full h-full min-h-[400px]">
        <Image
          src={props.image}
          alt="primary-blog-image"
          fill
          className="object-cover"
        />
      </div>

      <div className="postCardContent mt-2">
        <div className="cardTextHeading">
          <p className="author text-[#6941c6] text-xs mb-3">{props.author}</p>
          <div className="blogHeadingIcon flex flex-row justify-between">
            <a
              href="#"
              className="guide text-xl font-semibold text-[#101828] mb-3"
            >
              {props.guide}
            </a>
            <Image
              src={iconwrap}
              width={20}
              height={20}
              alt="navigate-icon"
              className="blog-external-link self-start"
            />
          </div>
          <p className="about text-sm text-[#475467] mb-3">{props.topic}</p>
        </div>
        <div className="categories flex flex-row">
          <div className="badge border m-2 main-design text-[#6941c6] text-xs bg-[#f9f5ff] rounded-2xl p-1">
            <p>Design</p>
          </div>
          <div className="badge border m-2 main-research text-[#3538cd] text-xs bg-[#eef4ff] rounded-2xl p-1">
            <p>Research</p>
          </div>
          <div className="badge border m-2 main-presentation text-[#c11574] text-xs bg-[#fdf2fa] rounded-2xl p-1">
            <p>Presentation</p>
          </div>
        </div>
      </div>
    </div>
  );
}
