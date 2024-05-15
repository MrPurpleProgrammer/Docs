import React from 'react';
import VerticalSidebar from '@/components/VerticalSidebar';
import MaxwidthWrapper from '@/components/MaxwidthWrapper';
import GettingStartedView from '@/views/getting-started';

export default function GettingStarted() {
  return (
    <MaxwidthWrapper className="w-full flex">
      <VerticalSidebar />
      <GettingStartedView />
    </MaxwidthWrapper>
  );
}
