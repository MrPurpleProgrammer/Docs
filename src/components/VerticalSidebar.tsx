import React from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const VerticalSidebar = () => {
  return (
    <div className="pl-10">
      <div>
        <h2 className="text-lg font-extrabold flex items-center text-[#6941c6] pb-5">
          {false ? (
            <FaChevronRight className="pr-2" />
          ) : (
            <span className="pr-2 w-4"></span>
          )}
          <span className="pl-2">GETTING STARTED</span>
        </h2>
        <ul className="space-y-3 text-[#454545] text-sm pb-5">
          <li className="flex items-center">
            {true ? (
              <FaChevronRight className="pr-2 rotate-90 self-end" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}

            <span className="pl-2">Quickstart</span>
          </li>
          <li className="flex items-center">
            {false ? (
              <FaChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span className="pl-2">Set up</span>
          </li>
          <li className="flex items-center">
            {false ? (
              <FaChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span className="pl-2">Import data</span>
          </li>
          <li className="flex items-center">
            {false ? (
              <FaChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span className="pl-2">Layout</span>
          </li>
          <li className="flex items-center">
            {false ? (
              <FaChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span className="pl-2">Style data</span>
          </li>
          <li className="flex items-center">
            {false ? (
              <FaChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span className="pl-2">Add tooltips</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <FaChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span className="pl-2">Resources</span>
          </li>
        </ul>

        <h2 className="text-lg font-extrabold flex items-center text-[#6941c6] pb-5">
          {false ? (
            <FaChevronDown className="pr-2" />
          ) : (
            <span className="pr-2 w-4"></span>
          )}
          <span className="pl-2">MAIN CONCEPTS</span>
        </h2>
        <ul className="space-y-3 text-sm pb-5">
          <li className="flex items-center">
            {false ? (
              <FaChevronDown className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span className="pl-2">Selections</span>
          </li>
          <li className="flex items-center">
            {false ? (
              <FaChevronDown className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span className="pl-2">Dynamic properties</span>
          </li>
          <li className="flex items-center">
            {false ? (
              <FaChevronDown className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span className="pl-2">Transformation</span>
          </li>
          <li className="flex items-center">
            {false ? (
              <FaChevronDown className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span className="pl-2">Animations</span>
          </li>
        </ul>

        <h2 className="text-lg font-extrabold flex items-center text-[#6941c6] pb-5">
          {false ? (
            <FaChevronDown className="pr-2" />
          ) : (
            <span className="pr-2 w-4"></span>
          )}
          <span className="pl-2 ">API REFERENCE</span>
        </h2>
        <ul className="space-y-3 text-sm pb-5">
          <li className="flex items-center">
            {true ? (
              <FaChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span className="pl-2">Axes</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <FaChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}

            <span className="pl-2">Brushes</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <FaChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}

            <span className="pl-2">Chords</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <FaChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}

            <span className="pl-2">Collections</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <FaChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}

            <span className="pl-2">Colors</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <FaChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}

            <span className="pl-2">Color Schemes</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <FaChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}

            <span className="pl-2">Contours</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <FaChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}

            <span className="pl-2">Dispatches</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <FaChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}

            <span className="pl-2">Dragging</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <FaChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}

            <span className="pl-2">Delimiter</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <FaChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span className="pl-2">Easing</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <FaChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span className="pl-2">Fetches</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <FaChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span className="pl-2">Forces</span>
          </li>
          <li className="flex items-center">
            {true ? (
              <FaChevronRight className="pr-2" />
            ) : (
              <span className="pr-2 w-4"></span>
            )}
            <span className="pl-2">Number Formats</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VerticalSidebar;
