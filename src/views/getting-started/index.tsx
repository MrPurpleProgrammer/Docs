import React from 'react';
import Feedback from '../../components/Feedback';
import QuickStart from '@/sections/QuickStart';
import SetUp from '@/sections/SetUp';
import Layout from '@/sections/Layout';
import Import from '@/sections/Import';

const GettingStartedView = () => {
  return (
    <section className=" w-full gap-3 flex flex-col xmd:flex-row">
      <div className="flex-grow flex-shrink px-4">
        <QuickStart />
        <hr className="w-full pt-2" />
        <SetUp />
        <hr className="w-full " />
        <Import />
        <hr className="w-full" />
        <Layout />
      </div>

      <div className="w-full min-w-[200px] max-w-[300px] px-4">
        <Feedback />
      </div>
    </section>
  );
};

export default GettingStartedView;
