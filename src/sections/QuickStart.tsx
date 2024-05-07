import React from "react";
import smartSwitch from "../assets/smartSwitch.png";
import gpsSensorModule from "../assets/gpsSensorModule.jpg"
import Image from "next/image";

export default function QuickStart() {
  return (
    <div className="container">
      <h1 className="text-zinc-700 font-bold text-2xl font-['Inter'] leading-loose tracking-tight mb-2">Quickstart</h1>
      <div className="mb-2">
        <span>
          Select a type of IOT Device that you want to integrate to get started:
        </span>
      </div>
      <div className="flex flex-row flex-wrap">
        <div className=" flex-col justify-between items-center mr-4">
          <Image
            src={gpsSensorModule}
            alt=""
            width={110}
            height={49}
            className="bg-gray-200 rounded mb-2"
          />
          <div className="text-center text-indigo-500 text-sm font-semibold font-['Inter']">
            Smart Switch
          </div>
        </div>

        <div className=" flex-col justify-between items-center mr-4">
          <Image
            src={gpsSensorModule}
            alt=""
            width={110}
            height={49}
            className="bg-gray-200 rounded mb-2"
          />
          <div className="text-center text-indigo-500 text-sm font-semibold font-['Inter']">
            GPS Sensor
          </div>
        </div>

        <div className=" flex-col justify-between items-center mr-4">
          <Image
            src={gpsSensorModule}
            alt=""
            width={110}
            height={49}
            className="bg-gray-200 rounded mb-2"
          />
          <div className="text-center text-indigo-500 text-sm font-semibold font-['Inter']">
            Charging Station
          </div>
        </div>

        <div className=" flex-col justify-between items-center  mr-4">
          <Image
            src={gpsSensorModule}
            alt=""
            width={110}
            height={49}
            className="bg-gray-200 rounded mb-2"
          />
          <div className="text-center text-indigo-500 text-sm font-semibold font-['Inter']">
            Glucose Monitor
          </div>
        </div>
      </div>
    </div>
  );
}
