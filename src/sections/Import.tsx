import { Button } from '@/components/ui/button';
import { CodeBlockWrapper } from '@/components/ui/code-block';
import { Info } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
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

const Import = () => (
  <div className="w-full flex flex-col h-auto py-3 text-foreground">
    <div className="flex flex-col justify-center py-3">
      <h1 className="text-2xl font-bold py-3">Import data</h1>
      <p className="text-sm font-normal font-['Inter'] leading-7">
        This chart shows the relative frequency of letters in the English language. This is a vertical bar chart, also
        known as a column chart. Compare to a horizontal bar chart.
      </p>

      <CodeBlockWrapper
        expandButtonTitle="Show Code"
        className="bg-[#F9F5ff] dark:bg-[#110e1b] rounded-xl text-foreground dark:text-muted-foreground w-full border text-sm"
      >
        <pre className="px-6 py-4 w-full overflow-x-auto">{reactCode}</pre>
      </CodeBlockWrapper>
    </div>
    <div className="flex flex-col md:flex-row">
      <div className="pr-5">
        <div className="py-2">
          <h4 className="text-lg font-bold">Fetch data and parse data</h4>
          <p className="text-sm font-normal font-['Inter'] leading-7">
            d3.fetch{' '}
            <span style={{ display: 'inline-block' }}>
              <HoverCard>
                <HoverCardTrigger>
                  <Info className="h-4 w-4" />
                </HoverCardTrigger>
                <HoverCardContent>
                  <div>
                    <h6>API Method</h6>
                    <p>d3.fetch </p>
                    <p>
                      d3.fetch has built-in support for parsing JSON, CSV, and TSV. You can parse additional formats by
                      using text directly.
                    </p>
                    <Button>Learn More</Button>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </span>{' '}
            is one of the convenience methods on top of the Fetch API. It get a comma-separated values (CSV) file.
          </p>
        </div>
        <div className="py-2">
          <h4 className="text-lg font-bold">Row conversion</h4>
          <p className="text-sm font-normal font-['Inter'] leading-7">
            If a row conversion function is not specified, field values are strings. For safety, there is no automatic
            conversion to numbers, dates, or other types.
          </p>
        </div>
        <div className="py-2">
          <h4 className="text-lg font-bold">Sort data</h4>
          <p className="text-sm font-normal font-['Inter'] leading-7">
            sort{' '}
            <span style={{ display: 'inline-block' }}>
              <HoverCard>
                <HoverCardTrigger>
                  <Info className="h-4 w-4" />
                </HoverCardTrigger>
                <HoverCardContent>
                  <div>
                    <h6>API Method</h6>
                    <p>sort </p>
                    <p>
                      ed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                      voluptatem
                    </p>
                    <Button>Learn More</Button>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </span>{' '}
            ed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
      <div className="p-4 border-l-2">
        <h6 className="text-[#6941c6] font-semibold text-sm py-2">Tips</h6>
        <p className="text-sm font-semibold py-2">Other types of files</p>
        <p className="text-sm py-2 font-medium font-['Inter'] leading-[19px]">
          <span className="text-[#6941c6] font-semibold text-sm">JSON: </span>
          ncidunt ut labore et dolore magnam aliquam.
        </p>
        <p className="text-sm py-2 font-medium font-['Inter'] leading-[19px]">
          <span className="text-[#6941c6] font-semibold text-sm">DSV: </span>
          labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <p className="text-sm py-2 font-medium font-['Inter'] leading-[19px]">
          <span className="text-[#6941c6] font-semibold text-sm">TSV: </span>
          ncidunt ut labore et dolore magnam aliquam.
        </p>
        <Button className="text-[#6941c6] bg-transparent">Learn more </Button>
      </div>
    </div>
  </div>
);
export default Import;
