import React from 'react';
import { FaChevronRight,FaChevronDown } from 'react-icons/fa';

const VerticalSidebar = () => {
  return (
    <div className="menubar col-span-3 pl-12 h-screen">
      <div className="px-4">
        <h2 className="text-sm font-semibold mb-4 flex items-center text-[#6941c6]">
           GETTING STARTED
        </h2>
        <ul className="space-y-2 text-[#454545] text-xs">
          <li className="flex items-center">
          <FaChevronDown className="mr-2"/> Quickstart
          </li>
          <li className="flex items-center">
             Set up
          </li>
          <li className="flex items-center">
             Import data
          </li>
          <li className="flex items-center">
             Layout
          </li>
          <li className="flex items-center">
             Style data
          </li>
          <li className="flex items-center">
             Add tooltips
          </li>
          <li className="flex items-center"><FaChevronRight className="mr-2 self-start" /> Resources</li>
        </ul>
        
        <h2 className="text-sm font-semibold mt-3 mb-4 flex items-center text-[#6941c6]">
           MAIN CONCEPTS
        </h2>
        <ul className="space-y-2 text-xs">
          <li className="flex items-center">
             Selections
          </li>
          <li className="flex items-center">
             Dynamic properties
          </li>
          <li className="flex items-center">
             Transformation
          </li>
          <li className="flex items-center">
             Animations
          </li>
          
        </ul>

        <h2 className="text-sm font-semibold mt-8 mb-4 flex items-center text-[#6941c6]">
           API REFERENCE
        </h2>
        <ul className="space-y-2 text-xs">
          <li className="flex items-center">
            <FaChevronRight className="mr-2" /> Axes
          </li>
          <li className="flex items-center">
            <FaChevronRight className="mr-2" /> Brushes
          </li>
          <li className="flex items-center">
            <FaChevronRight className="mr-2" /> Chords
          </li>
          <li className="flex items-center">
            <FaChevronRight className="mr-2" /> Collections
          </li>
          <li className="flex items-center">
            <FaChevronRight className="mr-2" /> Colors
          </li>
          <li className="flex items-center">
            <FaChevronRight className="mr-2" /> Color Schemes
          </li>
          <li className="flex items-center">
            <FaChevronRight className="mr-2" /> Contours
          </li>
          <li className="flex items-center">
            <FaChevronRight className="mr-2" /> Dispatches
          </li>
          <li className="flex items-center">
            <FaChevronRight className="mr-2" /> Dragging
          </li>
          <li className="flex items-center">
            <FaChevronRight className="mr-2" /> Delimiter
          </li>
          <li className="flex items-center">
            <FaChevronRight className="mr-2" /> Easing
          </li>
          <li className="flex items-center">
            <FaChevronRight className="mr-2" /> Fetches
          </li>
          <li className="flex items-center">
            <FaChevronRight className="mr-2" /> Forces
          </li>
          <li className="flex items-center">
            <FaChevronRight className="mr-2" /> Number Formats
          </li>

          
        </ul>
      </div>
    </div>
  );
};

export default VerticalSidebar;