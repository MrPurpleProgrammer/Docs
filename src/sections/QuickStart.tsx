import React from "react";
import smartSwitch from "../assets/smartSwitch.svg";
import chargingStation from "../assets/chargingStation.svg";
import gpsSensor from "../assets/gpsSensor.svg";
import glucose from "../assets/glucose.svg";
import Image from "next/image";

export default function QuickStart() {
  return (
    <div className="">
      <h1 className="text-zinc-600 font-bold text-2xl font-['Inter'] leading-loose tracking-tight mb-2">
        Quickstart
      </h1>
      <div className="mb-3">
        <span className="text-zinc-700 text-base font-normal font-['Inter'] leading-7">
          Select a type of IOT Device that you want to integrate to get started:
        </span>
      </div>
      <div className="flex flex-row flex-wrap gap-4">
        <div className="flex flex-col justify-center gap-3 items-center">
          <Image src={smartSwitch} alt="" width={70} height={70}></Image>

          <div className="text-center text-indigo-500 text-sm font-semibold font-['Inter'] -mt-3">
            Smart Switch
          </div>
        </div>

        <div className="flex flex-col justify-center gap-3 items-center">
          <Image src={gpsSensor} alt="" width={60} height={60}></Image>
          <div className="text-center text-indigo-500 text-sm font-semibold font-['Inter']">
            GPS Sensor
          </div>
        </div>

        <div className="flex flex-col justify-center gap-3 items-center">
          <Image src={chargingStation} alt="" width={60} height={60}></Image>

          <div className="text-center text-indigo-500 text-sm font-semibold font-['Inter']">
            Charging Station
          </div>
        </div>

        <div className="flex flex-col justify-center gap-3 items-center">
          <Image src={glucose} alt="" width={60} height={60}></Image>
          <div className="text-center text-indigo-500 text-sm font-semibold font-['Inter']">
            Glucose Monitor
          </div>
        </div>
      </div>
    </div>
  );
}
