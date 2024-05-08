import React from "react";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import feedbackIcon from "../assets/feedbackIcon.svg";

export default function SetUp() {
  return (
    <div className="relative">
      <h1 className="font-bold text-2xl text-zinc-700 mb-3 mt-3">Set up</h1>
      <div className="flex flex-row flex-wrap text-center mb-4">
        <div className="w-[95px] h-[26px] bg-gray-200 rounded text-zinc-700 text-sm font-semibold font-['Inter'] leading-none border p-1 mr-4">
          MQTT
        </div>
        <div className="text-zinc-700 text-sm font-semibold font-['Inter'] leading-none border-collapse p-1 mr-4">
          Websocket
        </div>
        <div className="text-zinc-700 text-sm font-semibold font-['Inter'] leading-none border-collapse p-1 mr-4">
          HTTP
        </div>
        <div className="text-zinc-700 text-sm font-semibold font-['Inter'] leading-none border-collapse p-1 mr-4">
          Zigbee
        </div>
      </div>
      <div className="mb-16">
        <div className=" w-[90%] text-zinc-700 text-base font-normal font-['Inter'] leading-7 mb-2">
          D3 is written using ES2015 modules. Create a custom bundle using
          Rollup, Webpack, or your preferred bundler.
        </div>
        <input
          type="text"
          id=""
          className="bg-stone-50 rounded w-[90%] h-9 mb-3"
        />
        <div className="w-[90%] text-zinc-700 text-base font-normal font-['Inter'] leading-7 mb-2">
          To import D3 into an ES2015 application, either import specific
          symbols from specific D3 modules. Or import everything into a
          namespace (here, d3):
        </div>
        <input
          type="text"
          name=""
          id=""
          className="bg-stone-50 rounded w-[90%] h-12 mb-3"
        />
        <div className="w-[90%] h-[27px] text-zinc-700 text-base font-normal font-['Inter'] leading-7 mb-2">
          In Node:
        </div>
        <input
          type="text"
          id=""
          className="w-[90%] h-9 bg-stone-50 rounded mb-3"
        />
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
}
