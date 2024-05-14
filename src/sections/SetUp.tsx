"use client";

import React from "react";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import feedbackIcon from "../assets/feedbackIcon.svg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Item } from "@radix-ui/react-dropdown-menu";
import { CodeBlockWrapper } from "@/components/ui/code-block";
import { Heading } from "lucide-react";

const SetupItems = [
  {
    id: 1,
    headings: "MQTT",
    content_1:
      "MQTT is a simple, lightweight messaging protocol used to establish communication between multiple devices. It is a TCP-based protocol relying on the publish-subscribe model. This communication protocol is suitable for transmitting data between resource-constrained devices having low bandwidth and low power requirements.",
    content_2:
      "MQTT’s publish/subscribe (pub/sub) communication style, which aims to maximise available bandwidth, is an alternative to conventional client-server architecture that communicates directly with an endpoint. In contrast, the client who transmits the message (the publisher) and the client or clients who receive it (the subscribers) are not connected in the pub/sub paradigm.",
  },
  {
    id: 2,
    headings: "Web Socket",
    content_1:
      "WebSocket is a realtime technology that enables bidirectional, full-duplex communication between client and server over a persistent, single-socket connection. The WebSocket connection is kept alive for as long as needed (in theory, it can last forever), allowing the server and the client to send data at will, with minimal overhead.",
    content_2:
      "Per the WebSocket protocol specification, the process of establishing a WebSocket connection is known as the opening handshake, and consists of an HTTP/1.1 request/response exchange between the client and the server. The client always initiates the handshake; it sends a GET request to the server, indicating that it wants to upgrade the connection from the HTTP protocol to WebSocket",
  },
  {
    id: 3,
    headings: "HTTP",
    content_1:
      "HTTP provides a standard between a web browser and a web server to establish communication. It is a set of rules for transferring data from one computer to another. Data such as text, images, and other multimedia files are shared on the World Wide Web. Whenever a web user opens their web browser, the user indirectly uses HTTP. It is an application protocol that is used for distributed, collaborative, hypermedia information systems.",
    content_2:
      "First of all, whenever we want to open any website then first open a web browser after that we will type the URL of that website (e.g., www.facebook.com ). This URL is now sent to the Domain Name Server (DNS). Then DNS first check records for this URL in their database, then DNS will return the IP address to the web browser corresponding to this URL. Now the browser is able to send requests to the actual server.",
  },
  {
    id: 4,
    headings: "ZigBee",
    content_1:
      "ZigBee is an open, global, packet-based protocol designed to provide an easy-to-use architecture for secure, reliable, low power wireless networks. Flow or process control equipment can be place anywhere and still communicate with the rest of the system. It can also be moved, since the network doesn’t care about the physical location of a sensor, pump or valve.",
    content_2:
      "ZigBee is a standard that addresses the need for very low-cost implementation of Low power devices with Low data rates for short-range wireless communications.",
  },
  {
    id: 5,
    headings: "OCPP 1.6j",
  },
];

const uniqueSetupItems = Array.from(
  new Set(SetupItems.map((items) => items.headings))
).map((headings) => SetupItems.find((items) => items.headings === headings));

const SetUp = () => {
  const [setupItemList, setSetupItemList] = useState(SetupItems);
  const [activeHeading, setActiveHeading] = useState<string>("MQTT");
  const filterClick = (headings: string) => {
    setActiveHeading(headings);
    if (true) {
      setSetupItemList(
        SetupItems.filter((items) => items.headings === headings)
      );
    }
  };

  const reactCode = `"use client"

import * as React from "react"
import { ChevronsUpDown, Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
`;

  return (
    <div className="relative">
      <h1 className="font-bold text-2xl text-zinc-700 mb-3 mt-3">Set up</h1>
      <div className="flex flex-row flex-wrap text-center mb-4">
        {SetupItems.map((items, index) => (
          <Button
            key={index}
            aria-current="page"
            className={cn(
              "w-[95px] h-[26px] text-sm font-semibold leading-none p-1 mr-4 text-[#6941c6]",
              activeHeading == items.headings
                ? "bg-[#F9F5ff] hover:bg-[#f9f5ff]"
                : "bg-transparent hover:bg-[#f9f5ff]"
            )}
            variant={activeHeading ? "default" : "ghost"}
            onClick={() => filterClick(items?.headings!)}
          >
            {items.headings}
          </Button>
        ))}
      </div>

      <div className="mb-16">
        <div className=" w-[90%] text-zinc-700 text-base font-normal font-['Inter'] leading-7 mb-2">
          {activeHeading}: D3 is written using ES2015 modules. Create a custom
          bundle using Rollup, Webpack, or your preferred bundler.
        </div>
        <CodeBlockWrapper
          expandButtonTitle="Show Code"
          className="dark:bg-white dark:text-gray-800 rounded-xl bg-gray-300 text-muted-foregroud w-full"
        >
          <pre className="px-6 py-4 w-full overflow-x-auto">{reactCode}</pre>
        </CodeBlockWrapper>
        <div className="w-[90%] text-zinc-700 text-base font-normal font-['Inter'] leading-7 mb-2">
          To import D3 into an ES2015 application, either import specific
          symbols from specific D3 modules. Or import everything into a
          namespace (here, d3):
        </div>
        <CodeBlockWrapper
          expandButtonTitle="Show Code"
          className="dark:bg-white dark:text-gray-800 rounded-xl bg-gray-300 text-muted-foregroud w-full"
        >
          <pre className="px-6 py-4 w-full overflow-x-auto">{reactCode}</pre>
        </CodeBlockWrapper>
        <div className="w-[90%] h-[27px] text-zinc-700 text-base font-normal font-['Inter'] leading-7 mb-2">
          In Node:
        </div>
        <CodeBlockWrapper
          expandButtonTitle="Show Code"
          className="dark:bg-white dark:text-gray-800 rounded-xl bg-gray-300 text-muted-foregroud w-full"
        >
          <pre className="px-6 py-4 w-full overflow-x-auto">{reactCode}</pre>
        </CodeBlockWrapper>
        <div className="w-[80%] mb-3">
          <span className="text-zinc-700 text-xs font-semibold font-['Inter'] leading-none">
            Download{" "}
          </span>
          <span className="text-indigo-500 text-xs font-semibold font-['Inter'] leading-none">
            d3 version (5.12.0)
          </span>
          <span className="text-zinc-700 text-xs font-semibold font-['Inter'] leading-none">
            . View{" "}
          </span>
          <span className="text-indigo-500 text-xs font-semibold font-['Inter'] leading-none">
            source code{" "}
          </span>
          <span className="text-zinc-700 text-xs font-semibold font-['Inter'] leading-none">
            or the{" "}
          </span>
          <span className="text-indigo-500 text-xs font-semibold font-['Inter'] leading-none">
            changelog
          </span>
          <span className="text-zinc-700 text-xs font-semibold font-['Inter'] leading-none">
            {" "}
            on Github.
          </span>
        </div>

        <div className="w-24 h-4 block mb-0 mt-4 absolute bottom-[-40px] right-20">
          <div className="relative text-right text-neutral-400 text-[13px] font-medium font-['Inter'] leading-none">
            <Image
              className="inline-block"
              src={feedbackIcon}
              alt=""
              width={11}
              height={13}
            />
            <span className="inline-block ml-1">Feedback</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetUp;
