import Image from "next/image";
import iconwrap from "../assets/iconwrap.svg";
import mappin from "../assets/mappin.svg";
import clock from "../assets/clock.svg";
import Link from "next/link";
const CardItem = ({
  heading,
  href,
  link,
  location,
  subHeading,
  time,
}: {
  subHeading: string;
  heading: string;
  location: string;
  time: string;
  link: string;
  href: string;
}) => (
  <div className="w-[350px] h-[100px] bg-card rounded-xl p-3 text-card-foreground cursor-pointer hover:scale-105 ease-in duration-200">
    <div className="content-container flex flex-col">
      <div className="heading-container flex flex-row justify-between pb-2">
        <div className="flex flex-col justify-between">
          <p className="text-[#6941c6] text-[10px] pb-1 font-semibold">
            {subHeading}
          </p>

          <h1 className="text-sm font-semibold">{heading}</h1>
        </div>
        <Link
          href={href}
          className="text-[#6941c6] text-xs self-start flex flex-row font-semibold"
        >
          {link}
          <Image
            src={iconwrap}
            width={17}
            height={20}
            alt="navigate-icon"
            className="self-start pl-1 text-[#6941c6] external-link"
          />
        </Link>
      </div>
      <div className="image-components flex flex-row pt-2">
        <div className="pr-5 text-sm flex flex-row">
          <Image
            src={mappin}
            width={17}
            height={20}
            alt="mapin-icon"
            className="self-center pr-1 text-[#6941c6]"
          />
          <p className="text-xs">{location}</p>
        </div>
        <div className="pr-5 text-sm flex flex-row">
          <Image
            src={clock}
            width={17}
            height={20}
            alt="clock-icon"
            className="self-center pr-1 text-[#6941c6]"
          />
          <p className="text-xs">{time}</p>
        </div>
      </div>
    </div>
  </div>
);

export default CardItem;
