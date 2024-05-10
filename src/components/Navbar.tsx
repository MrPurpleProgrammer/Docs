import Image from "next/image";
import { Input, Button } from "@nextui-org/react";
import Link from "next/link";
import wavefuelLogo from "../assets/wavefuelLogo.svg";
import materialSymbolsSearch from "../assets/materialSymbolsSearch.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import { SearchBar } from "./SearchBar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavBar() {
  const navbarLinks = [
    { title: "Getting Started", link: "/getting-started" },
    { title: "API Reference", link: "/api-reference" },
    { title: "Guides", link: "/guides" },
    { title: "Examples", link: "/examples" },
  ];

  return (
    <nav className="w-full  flex bg-[#F1F2F6] ">
      <div className="w-full lg:max-w-[90%] px-3  mx-auto flex items-center justify-between h-20 overflow-x-hidden">
        <div className="flex items-center xmd:gap-5">
          <Link href="/home">
            <Image
              className="h-12 min-w-10"
              width={97}
              height={33}
              src={wavefuelLogo}
              alt=""
            />
          </Link>

          <div className="hidden xmd:flex gap-5">
            {navbarLinks.map((item, index) => (
              <Link
                key={index}
                className="text-gray-500 font-Clash text-[12px] xl:text-base font-medium leading-5 tracking-wider"
                href={item.link}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div>
            <SearchBar />
          </div>
          <div className="xmd:hidden inline-block">
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:ouline-ring data-[state=open]:outline-ring">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.625 2.5C8.625 3.12132 8.12132 3.625 7.5 3.625C6.87868 3.625 6.375 3.12132 6.375 2.5C6.375 1.87868 6.87868 1.375 7.5 1.375C8.12132 1.375 8.625 1.87868 8.625 2.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {navbarLinks.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <Link href={item?.link}> {item.title}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="hidden xmd:flex gap-3">
            <Image src={github} width={33} height={33} alt="" />
            <Image src={linkedin} width={33} height={33} alt="" />
            <Button className="bg-purple-900 opacity-70 text-white ">
              Signin
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
