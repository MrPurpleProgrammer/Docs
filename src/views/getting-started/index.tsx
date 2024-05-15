import React from 'react';
import Feedback from '../../components/Feedback';
import QuickStart from '@/sections/QuickStart';
import SetUp from '@/sections/SetUp';
import QSLayout from '@/sections/QSLayout';
import QSImport from '@/sections/QSImport';

const GettingStartedView = () => {
  return (
    <section className=" w-full gap-3 flex flex-col xmd:flex-row">
      <div className="flex-grow flex-shrink col-span-3">
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
