import { Item } from '@radix-ui/react-dropdown-menu';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { title } from 'process';
import React from 'react';
// import { Accordion } from "./ui/accordion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { sidebarData } from '@/config/sidebarData';

const Sidebar = () => {
  return (
    <div className="px-6 lg:px-0 w-full lg:max-w-[250px] hidden lg:block">
      {sidebarData.map((section) => (
        <div key={section.mainTitle} className="text-black">
          <h1 className="text-sm font-extrabold flex self-center text-[#6941C6] pb-1">{section.mainTitle}</h1>
          {section.mainItems.map((item) => {
            if ('titleItems' in item) {
              return item.titleItems && item.titleItems.length > 0 ? (
                <Accordion key={item.title} type="single" collapsible className="text-foreground place-items-start">
                  <AccordionItem value={item.title}>
                    <AccordionTrigger className="text-[13px] gap-1 self-start">{item.title}</AccordionTrigger>
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
                <div className="text-[12px] py-1 text-foreground" key={item.title}>
                  {item.title}
                </div>
              );
          })}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
