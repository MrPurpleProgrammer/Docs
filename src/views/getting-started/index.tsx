import React from "react";
import Feedback from "../../components/Feedback";
import QuickStart from "@/sections/QuickStart";
import SetUp from "@/sections/SetUp";
import QSLayout from "@/sections/QSLayout";
import QSImport from "@/sections/QSImport";

const GettingStartedView = () => {
  return (
    <section className="flex w-full gap-3 flex-col xmd:flex-row">
      <div className="max-w-auto flex-grow flex-shrink">
        <QuickStart />
        <hr className="w-full mt-2" />
        <SetUp />
        <hr className="w-full " />
        <QSImport />
        <hr className="w-full" />
        <QSLayout />
      </div>

      <div className="w-full min-w-[200px] max-w-[300px]">
        <Feedback />
      </div>
    </section>
  );
};

export default GettingStartedView;
