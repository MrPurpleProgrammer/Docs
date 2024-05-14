import { Item } from "@radix-ui/react-dropdown-menu";
import { ChevronRight, ChevronDown } from "lucide-react";
import { title } from "process";
import React from "react";
// import { Accordion } from "./ui/accordion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const sidebarData = [
  {
    mainTitle: "GETTING STARTED",
    mainItems: [
      {
        title: "Quickstart",
        href: "/",
        titleItems: [
          { subTitle: "Set up", href: "/" },
          { subTitle: "Import data", href: "/" },
          { subTitle: "Layout", href: "/" },
          { subTitle: "Style data", href: "/" },
          { subTitle: "Add tooltips", href: "/" },
        ],
      },
      {
        title: "Resources",
        href: "/",
        titleItems: [{ subTitle: "Set up", href: "/" }],
      },
    ],
  },
  {
    mainTitle: "MAIN CONCEPTS",
    mainItems: [
      { title: "Selections", href: "/" },
      { title: "Dynamic properties", href: "/" },
      { title: "Transformation", href: "/" },
      { title: "Animations", href: "/" },
    ],
  },
  {
    mainTitle: "API REFERENCE",
    mainItems: [
      {
        title: "Axes",
        href: "/",
        titleItems: [
          { subTitle: "Empty-1", href: "/" },
          { subTitle: "Empty-2", href: "/" },
        ],
      },
      {
        title: "Brushes",
        href: "/",
        titleItems: [
          { subTitle: "Empty-1", href: "/" },
          { subTitle: "Empty-2", href: "/" },
        ],
      },
      {
        title: "Chords",
        href: "/",
        titleItems: [
          { subTitle: "Empty-1", href: "/" },
          { subTitle: "Empty-2", href: "/" },
        ],
      },
      {
        title: "Collections",
        href: "/",
        titleItems: [
          { subTitle: "Empty-1", href: "/" },
          { subTitle: "Empty-2", href: "/" },
        ],
      },
      {
        title: "Colors",
        href: "/",
        titleItems: [
          { subTitle: "Empty-1", href: "/" },
          { subTitle: "Empty-2", href: "/" },
        ],
      },
      {
        title: "Color Schemes",
        href: "/",
        titleItems: [
          { subTitle: "Empty-1", href: "/" },
          { subTitle: "Empty-2", href: "/" },
        ],
      },
      {
        title: "Contours",
        href: "/",
        titleItems: [
          { subTitle: "Empty-1", href: "/" },
          { subTitle: "Empty-2", href: "/" },
        ],
      },
      {
        title: "Dispatches",
        href: "/",
        titleItems: [
          { subTitle: "Empty-1", href: "/" },
          { subTitle: "Empty-2", href: "/" },
        ],
      },
      {
        title: "Dragging",
        href: "/",
        titleItems: [
          { subTitle: "Empty-1", href: "/" },
          { subTitle: "Empty-2", href: "/" },
        ],
      },
      {
        title: "Delimiter",
        href: "/",
        titleItems: [
          { subTitle: "Empty-1", href: "/" },
          { subTitle: "Empty-2", href: "/" },
        ],
      },
      {
        title: "Easing",
        href: "/",
        titleItems: [
          { subTitle: "Empty-1", href: "/" },
          { subTitle: "Empty-2", href: "/" },
        ],
      },
      {
        title: "Fetches",
        href: "/",
        titleItems: [
          { subTitle: "Empty-1", href: "/" },
          { subTitle: "Empty-2", href: "/" },
        ],
      },
      {
        title: "Forces",
        href: "/",
        titleItems: [
          { subTitle: "Empty-1", href: "/" },
          { subTitle: "Empty-2", href: "/" },
        ],
      },
      {
        title: "Number Formats",
        href: "/",
        titleItems: [
          { subTitle: "Empty-1", href: "/" },
          { subTitle: "Empty-2", href: "/" },
        ],
      },
    ],
  },
];

const VerticalSidebar = () => {
  return (
    <div className="px-6 ">
      {sidebarData.map((section) => (
        <div key={section.mainTitle} className="text-black">
          <h2 className="text-lg  font-extrabold flex items-center text-[#6941c6] pb-5">
            {section.mainTitle}
          </h2>
          {section.mainItems.map((item) =>
            item?.titleItems && item?.titleItems.length > 0 ? (
              <Accordion
                key={item.title}
                type="single"
                collapsible
                className="text-black"
              >
                <AccordionItem value={item.title}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>
                    {item.titleItems.map((subItem) => (
                      <div key={subItem.subTitle}>
                        <span className="px-7">{subItem.subTitle}</span>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <div className="px-7" key={item.title}>
                {item.title}
              </div>
            )
          )}
        </div>
      ))}

      {/* <div>
        <h2 className="text-lg  font-extrabold flex items-center text-[#6941c6] pb-5">
          {false ? (
            <ChevronRight className="pr-2" />
          ) : (
            // <span className="pr-2 w-4"></span>
            <span></span>
          )}
          <span className="">GETTING STARTED</span>
        </h2>
        <ul className="space-y-3 text-[#454545] text-sm pb-5">
          <li className="flex items-center">
            {true ? <ChevronDown className="w-4 h-4" /> : <span></span>}

            <span className="pl-2">Quickstart</span>
          </li>
          <li className="flex items-center">
            {false ? (
              <ChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span className="pl-2">Set up</span>
          </li>
          <li className="flex items-center">
            {false ? (
              <ChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span className="pl-2">Import data</span>
          </li>
          <li className="flex items-center">
            {false ? (
              <ChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span className="pl-2">Layout</span>
          </li>
          <li className="flex items-center">
            {false ? (
              <ChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span className="pl-2">Style data</span>
          </li>
          <li className="flex items-center">
            {false ? (
              <ChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span className="pl-2">Add tooltips</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <ChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span>Resources</span>
          </li>
        </ul>

        <h2 className="text-lg font-extrabold flex items-center text-[#6941c6] pb-5">
          {false ? (
            <ChevronDown className="pr-2" />
          ) : (
            // <span className="pr-2 w-4"></span>
            <span></span>
          )}
          <span className="">MAIN CONCEPTS</span>
        </h2>
        <ul className="space-y-3 text-sm pb-5">
          <li className="flex items-center">
            {false ? (
              <ChevronDown className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span className="pl-2">Selections</span>
          </li>
          <li className="flex items-center">
            {false ? (
              <ChevronDown className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span className="pl-2">Dynamic properties</span>
          </li>
          <li className="flex items-center">
            {false ? (
              <ChevronDown className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span className="pl-2">Transformation</span>
          </li>
          <li className="flex items-center">
            {false ? (
              <ChevronDown className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span className="pl-2">Animations</span>
          </li>
        </ul>

        <h2 className="text-lg font-extrabold flex items-center text-[#6941c6] pb-5">
          {false ? (
            <ChevronDown className="pr-2" />
          ) : (
            // <span className="pr-2 w-4"></span>
            <span></span>
          )}
          <span className=" ">API REFERENCE</span>
        </h2>
        <ul className="space-y-3 text-sm pb-5">
          <li className="flex items-center">
            {true ? (
              <ChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span>Axes</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <ChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}

            <span>Brushes</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <ChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}

            <span>Chords</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <ChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}

            <span>Collections</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <ChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}

            <span>Colors</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <ChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}

            <span>Color Schemes</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <ChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}

            <span>Contours</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <ChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}

            <span>Dispatches</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <ChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}

            <span>Dragging</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <ChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}

            <span>Delimiter</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <ChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span>Easing</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <ChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span>Fetches</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <ChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span>Forces</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <ChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span>Number Formats</span>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default VerticalSidebar;
