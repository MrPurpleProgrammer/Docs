import Image from 'next/image';
import bargraph from '../assets/bargraph.svg';
import { CodeBlockWrapper } from '@/components/ui/code-block';

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
const QSLayout = () => (
  <div className="layout-section w-full flex flex-col gap-3 h-auto py-3 text-foreground">
    <div className="layout-heading-container">
      <h1 className="text-3xl font-bold">Layout</h1>
      <p className=" text-base font-normal font-['Inter'] leading-7">
        This chart shows the relative frequency of letters in the English language. This is a vertical bar chart, also
        known as a column chart. Compare to a horizontal bar chart.
      </p>
    </div>
    <div className="width-margin-conatiner flex flex-row">
      <div className="combined-container">
        <div className="width-heading-container py-2">
          <h4 className="text-lg font-bold">Width and Height</h4>
          <p className=" text-base font-normal font-['Inter'] leading-7">
            x, y empora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
        <div className="margin-container py-2">
          <h4 className="text-lg font-bold">Margins</h4>
          <p className=" text-base font-normal font-['Inter'] leading-7">
            You idunt ut labore et top, bottom, left, rightempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem.
          </p>
        </div>
      </div>
      <div className="graph-container">
        <Image src={bargraph} alt="graph" className="object-cover" />
      </div>
    </div>
    {/* Code Container */}
    <div className="flex flex-col justify-center">
      <h4 className="text-lg font-bold">Axes and reference marks</h4>

      <CodeBlockWrapper
        expandButtonTitle="Show Code"
        className="dark:bg-white dark:text-gray-800 rounded-xl bg-gray-300 text-muted-foregroud w-full"
      >
        <pre className="px-6 py-4 w-full overflow-x-auto">{reactCode}</pre>
      </CodeBlockWrapper>
    </div>
    <div className="domain-container">
      <h4 className="text-lg font-bold">Domain</h4>
      <p className=" text-base font-normal font-['Inter'] leading-7">
        You idunt ut labore et scaleBand, range empora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>
    </div>
  </div>
);
export default QSLayout;
