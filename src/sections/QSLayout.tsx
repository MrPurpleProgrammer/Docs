import Image from "next/image";
import bargraph from "../assets/bargraph.svg";

const QSLayout = () => (
  <div className="layout-section w-full flex flex-col gap-3 h-auto py-3">
    <div className="layout-heading-container">
      <h1 className="text-3xl text-[#101828] font-bold">Layout</h1>
      <p className="text-sm text-[#101828]">
        This chart shows the relative frequency of letters in the English
        language. This is a vertical bar chart, also known as a column chart.
        Compare to a horizontal bar chart.
      </p>
    </div>
    <div className="width-margin-conatiner flex flex-row">
      <div className="combined-container">
        <div className="width-heading-container py-2">
          <h4 className="text-lg text-[#101828] font-bold">Width and Height</h4>
          <p className="text-sm text-[#101828]">
            x, y empora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem.
          </p>
        </div>
        <div className="margin-container py-2">
          <h4 className="text-lg text-[#101828] font-bold">Margins</h4>
          <p className="text-sm text-[#101828]">
            You idunt ut labore et top, bottom, left, rightempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
      <div className="graph-container">
        <Image src={bargraph} alt="graph" className="object-cover" />
      </div>
    </div>
    {/* Code Container */}
    <div className="flex flex-col justify-center">
      <h4 className="text-lg text-[#101828] font-bold">
        Axes and reference marks
      </h4>
      <code className="text-xs text-[#101828] bg-white p-4 border">
        This is sample code block
      </code>
    </div>
    <div className="domain-container">
      <h4 className="text-lg text-[#101828] font-bold">Domain</h4>
      <p className="text-sm text-[#101828]">
        You idunt ut labore et scaleBand, range empora incidunt ut labore et
        dolore magnam aliquam quaerat voluptatem.
      </p>
    </div>
  </div>
);
export default QSLayout;
