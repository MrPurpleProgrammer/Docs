'use client';
import { useState } from 'react';
import CardItem from '../components/CardItem';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
const SidebarItems = [
  {
    id: 1,
    subHeading: 'Developer Docs',
    heading: 'Quick Start',
    location: 'API',
    time: '20 Min Read',
    link: 'View Docs',
    href: '#',
  },
  {
    id: 2,
    subHeading: 'Example Reference',
    heading: 'Firmware Integration Guide',
    location: 'Guide',
    time: '20 Min Read',
    link: 'View Docs',
    href: '#',
  },
  {
    id: 3,
    subHeading: 'Schema Reference',
    heading: 'What is an Item?',
    location: 'Schema',
    time: '5 Min Read',
    link: 'View Docs',
    href: '#',
  },
  {
    id: 4,
    subHeading: 'Developer Docs',
    heading: 'Quick Start',
    location: 'API',
    time: '20 Min Read',
    link: 'View Docs',
    href: '#',
  },
  {
    id: 5,
    subHeading: 'Example Reference',
    heading: 'Firmware Integration Guide',
    location: 'Guide',
    time: '20 Min Read',
    link: 'View Docs',
    href: '#',
  },
];
const uniqueSidebarItems = Array.from(new Set(SidebarItems.map((item) => item.subHeading))).map((subHeading) =>
  SidebarItems.find((item) => item.subHeading === subHeading)
);
console.log(uniqueSidebarItems);
const Sidebar = () => {
  const [itemList, setItemList] = useState(SidebarItems);
  const [activeSubheading, setActiveSubheading] = useState('View All');
  const filterClick = (subheading: string) => {
    setActiveSubheading(subheading);
    if (subheading === 'View All') {
      // If "View All" is clicked, show all items
      setItemList(SidebarItems);
    } else {
      // Otherwise, filter items based on the subheading
      setItemList(SidebarItems.filter((item) => item.subHeading === subheading));
    }
  };
  return (
    <div className="sidebar-container w-full min-h-fit py-3 xmd:py-4 text-foreground">
      <ul className="sidemenu flex flex-wrap gap-2 xmd:gap-4 py-3">
        <li>
          <Button
            aria-current="page"
            className={cn(
              'inline-block font-semibold hover:bg-[#F9F5ff] text-[#667085] bg-transparent text-xs xmd:text-sm text-center px-1 py-2 h-8 ',
              {
                'bg-[#F9F5ff] text-[#6941c6]': activeSubheading === 'View All',
              }
            )}
            onClick={() => filterClick('View All')}
          >
            View All
          </Button>
        </li>

        {uniqueSidebarItems &&
          uniqueSidebarItems?.map((listitem, index) => (
            <li key={index}>
              <Button
                aria-current="page"
                className={cn(
                  'inline-block font-semibold bg-transparent hover:bg-[#F9F5ff] text-[#667085] text-xs xmd:text-sm text-center px-1 py-2 h-8 ',
                  {
                    'bg-[#F9F5ff] text-[#6941c6]': activeSubheading === listitem?.subHeading,
                  }
                )}
                onClick={() => filterClick(listitem?.subHeading!)}
              >
                {listitem?.subHeading}
              </Button>
            </li>
          ))}
      </ul>
      <div className="cards-container h-fit flex flex-wrap gap-4 justify-center md:justify-start">
        {itemList.map((item, index) => {
          // const {heading,href,link,location,subHeading,time} = item

          return <CardItem key={index} {...item} />;
        })}
      </div>
    </div>
  );
};
export default Sidebar;
