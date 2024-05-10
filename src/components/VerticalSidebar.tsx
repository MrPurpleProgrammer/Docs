import { ChevronRight, ChevronDown } from "lucide-react";
import React from "react";

const VerticalSidebar = () => {
  return (
    <div className="px-6 ">
      <div>
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
      </div>
    </div>
  );
};

export default VerticalSidebar;
