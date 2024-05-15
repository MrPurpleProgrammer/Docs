import { Item } from '@radix-ui/react-dropdown-menu';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { title } from 'process';
import React from 'react';
// import { Accordion } from "./ui/accordion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { sidebarData } from '@/config/sidebarData';

const VerticalSidebar = () => {
  return (
    <div className="px-6 lg:px-0 w-full lg:max-w-[150px] xl:max-w-[250px] hidden lg:block">
      {sidebarData.map((section) => (
        <div key={section.mainTitle} className="text-black">
          <h2 className="text-sm font-extrabold flex items-center text-[#6941C6] pb-1">{section.mainTitle}</h2>
          {section.mainItems.map((item) => {
            if ('titleItems' in item) {
              return item.titleItems && item.titleItems.length > 0 ? (
                <Accordion key={item.title} type="single" collapsible className="text-foreground">
                  <AccordionItem value={item.title}>
                    <AccordionTrigger className="text-[13px] gap-1">{item.title}</AccordionTrigger>
                    <AccordionContent>
                      {item.titleItems.map((subItem) => (
                        <div key={subItem.subTitle}>
                          <span className="px-4 text-[12px]">{subItem.subTitle}</span>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <div className="px-4 text-[12px]" key={item.title}>
                  {item.title}
                </div>
              );
            } else
              return (
                <div className="text-[12px] pb-2 px-4 text-foreground" key={item.title}>
                  {item.title}
                </div>
              );
          })}
        </div>
      ))}
    </div>
  );
};

export default VerticalSidebar;
