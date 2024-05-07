import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between px-7 h-20 bg-[#F1F2F6]">
      <div className="flex items-center gap-5">
        <Link href="/">
          <Image
            className="h-12 min-w-10"
            width={97}
            height={33}
            src="/images/wavefuel-logo.svg"
            alt=""
          />
        </Link>
        <div className="flex gap-5">
          <Link className="text-gray-500 font-Clash text-base font-medium leading-5 tracking-wider" href="/">Getting Started</Link>
          <Link className="text-gray-500 font-Clash text-base font-medium leading-5 tracking-wider" href="/">API Reference</Link>
          <Link className="text-gray-500 font-Clash text-base font-medium leading-5 tracking-wider" href="/">Guides</Link>
          <Link className="text-gray-500 font-Clash text-base font-medium leading-5 tracking-wider" href="/">Example</Link>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <Input
          placeholder="Search"
          type="search"
          size="sm"
          endContent={
            <Image
              src="/images/material-symbols-search.svg"
              width={24}
              height={24}
              alt=""
            />
          }
        />
        <Image src="/images/mdi-github.svg" width={33} height={33} alt="" />
        <Image src="/images/mdi-linkedin.svg" width={33} height={33} alt="" />
        <Button className="bg-purple-900 opacity-70 text-white">Signin</Button>
      </div>
    </nav>
  );
}
