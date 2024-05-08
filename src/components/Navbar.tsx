import Image from "next/image";
import { Input, Button } from "@nextui-org/react";
import Link from "next/link";
import wavefuelLogo from "../assets/wavefuelLogo.svg";
import materialSymbolsSearch from "../assets/materialSymbolsSearch.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between px-7 h-20 bg-[#F1F2F6]">
      <div className="flex items-center gap-5">
        <Link href="/home">
          <Image
            className="h-12 min-w-10"
            width={97}
            height={33}
            src={wavefuelLogo}
            alt=""
          />
        </Link>
        <div className="flex gap-5">
          <Link
            className="text-gray-500 font-Clash text-base font-medium leading-5 tracking-wider"
            href="/getting-started"
          >
            Getting Started
          </Link>
          <Link
            className="text-gray-500 font-Clash text-base font-medium leading-5 tracking-wider"
            href="/"
          >
            API Reference
          </Link>
          <Link
            className="text-gray-500 font-Clash text-base font-medium leading-5 tracking-wider"
            href="/"
          >
            Guides
          </Link>
          <Link
            className="text-gray-500 font-Clash text-base font-medium leading-5 tracking-wider"
            href="/"
          >
            Example
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <Input
          placeholder="Search"
          type="search"
          size="sm"
          endContent={
            <Image src={materialSymbolsSearch} width={24} height={24} alt="" />
          }
        />
        <Image src={github} width={33} height={33} alt="" />
        <Image src={linkedin} width={33} height={33} alt="" />
        <Button className="bg-purple-900 opacity-70 text-white">Signin</Button>
      </div>
    </nav>
  );
}
