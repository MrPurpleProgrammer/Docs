import React from "react";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import feedbackIcon from "../assets/feedbackIcon.svg";

const SetUp = () => (
  <div>
    <h1 className="font-bold text-2xl text-zinc-700">Set up</h1>
    <div className="flex flex-row flex-wrap mb-2">
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
    <div>
      <div className=" w-[80%] text-zinc-700 text-base font-normal font-['Inter'] leading-7">
        D3 is written using ES2015 modules. Create a custom bundle using Rollup,
        Webpack, or your preferred bundler.
      </div>
      <input type="text" id="" className="bg-stone-50 rounded w-[80%] h-9" />
      <div className="w-[80%] h-14 text-zinc-700 text-base font-normal font-['Inter'] leading-7">
        To import D3 into an ES2015 application, either import specific symbols
        from specific D3 modules. Or import everything into a namespace (here,
        d3):
      </div>
      <input
        type="text"
        name=""
        id=""
        className="bg-stone-50 rounded w-[80%] h-12"
      />
      <div className="w-[80%] h-[27px] text-zinc-700 text-base font-normal font-['Inter'] leading-7">
        In Node:
      </div>
      <input type="text" id="" className="w-[80%] h-9 bg-stone-50 rounded" />
      <div className="w-[80%]">
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

      <div className="w-24 h-4 relative mb-3">
        <div className="top-0 absolute text-right text-neutral-400 text-[13px] font-medium font-['Inter'] leading-none">
          <Image
            className="left-0 top-0 absolute mx-3"
            src={feedbackIcon}
            alt=""
            width={11}
            height={13}
          />
          Feedback
        </div>
      </div>
    </div>
  </div>
);
export default SetUp;
