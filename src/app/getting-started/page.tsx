import React from 'react';
import Sidebar from '@/components/Sidebar';
import MaxwidthWrapper from '@/components/MaxwidthWrapper';
import GettingStartedView from '@/views/getting-started';

export default function GettingStarted() {
  return (
    <MaxwidthWrapper className="w-full flex">
      <Sidebar />
      <GettingStartedView />
    </MaxwidthWrapper>
  );
}
