/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { Input, Button } from "@nextui-org/react";
import { Button as UIButton } from "./ui/button";
import Link from "next/link";
import wavefuelLogo from "../assets/wavefuelLogo.svg";
import materialSymbolsSearch from "../assets/materialSymbolsSearch.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import { SearchBar } from "./SearchBar";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { AlignJustify } from "lucide-react";
import { useState } from "react";
import VerticalSidebar from "./VerticalSidebar";
import { sidebarData } from "@/config/sidebarData";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function NavBar() {
  const navbarLinks = [
    { title: "Getting Started", link: "/getting-started" },
    { title: "API Reference", link: "/api-reference" },
    { title: "Guides", link: "/guides" },
    { title: "Examples", link: "/examples" },
  ];
  const path = usePathname();
  return (
    <nav className="w-full flex bg-background text-foreground">
      <div className="w-full px-3  mx-auto flex items-center justify-between h-20 overflow-x-hidden">
        <div className="flex items-center xmd:gap-5">
          <div className="flex justify-center items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <UIButton
                  variant="outline"
                  size="icon"
                  className="lg:hidden flex justify-center items-center"
                >
                  <AlignJustify className="w-5 h-5 stroke-foreground" />
                </UIButton>
              </SheetTrigger>
              <SheetContent side="left" className="overflow-auto max-w-[75%]">
                {sidebarData.map((section) => (
                  <div key={section.mainTitle} className="text-black">
                    <h2 className="text-sm font-extrabold flex items-center text-[#6941C6] pb-1">
                      {section.mainTitle}
                    </h2>
                    {section.mainItems.map((item) => {
                      if ("titleItems" in item) {
                        return item.titleItems && item.titleItems.length > 0 ? (
                          <Accordion
                            key={item.title}
                            type="single"
                            collapsible
                            className="text-black "
                          >
                            <AccordionItem value={item.title}>
                              <AccordionTrigger className="text-[13px] gap-1">
                                {item.title}
                              </AccordionTrigger>
                              <AccordionContent>
                                {item.titleItems.map((subItem) => (
                                  <div key={subItem.subTitle}>
                                    <span className="px-4 text-[12px]">
                                      {subItem.subTitle}
                                    </span>
                                  </div>
                                ))}
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        ) : (
                          <div className="px-4 text-[12px]" key={item.title}>
                            {item.title}
                          </div>
                        );
                      } else
                        return (
                          <div
                            className="text-[12px] pb-2 px-4"
                            key={item.title}
                          >
                            {item.title}
                          </div>
                        );
                    })}
                  </div>
                ))}
              </SheetContent>
            </Sheet>
            <Link href="/">
              <Image
                className="h-12 min-w-10"
                width={97}
                height={33}
                src={wavefuelLogo}
                alt=""
              />
            </Link>
          </div>

          <div className="hidden xmd:flex gap-3">
            {navbarLinks.map((item, index) => (
              <Link
                key={index}
                className={cn(
                  " rounded-md text-[10px] xl:text-sm font-medium leading-5 tracking-wider hover:text-[#6941c6]",
                  {
                    "text-[#6941c6]": path === item.link,
                  }
                )}
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
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {navbarLinks.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <Link href={item?.link}> {item.title}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem className="flex gap-3">
                  <div className="flex gap-2">
                    <Image src={github} width={23} height={23} alt="" />
                    <Image src={linkedin} width={23} height={23} alt="" />
                  </div>
                  <div>
                    <Button className="bg-purple-900 opacity-70 text-white rounded-md">
                      Signin
                    </Button>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="hidden xmd:flex gap-3">
            <Image
              src={github}
              width={33}
              height={33}
              alt=""
              className="hover:scale-105 ease-in duration-200"
            />
            <Image
              src={linkedin}
              width={33}
              height={33}
              alt=""
              className="hover:scale-105 ease-in duration-200"
            />
            <Button className="bg-purple-900 opacity-70 text-white hover:scale-105 ease-in duration-200">
              Signin
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
