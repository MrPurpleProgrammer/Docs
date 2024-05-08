import { Button } from "@/components/ui/button";

const QSImport = () => (
  <div className="w-full flex flex-col h-auto py-4">
    <div className="flex flex-col justify-center py-2">
      <h1 className="text-3xl text-[#101828] font-bold">Import data</h1>
      <p className="text-sm text-[#101828]">
        This chart shows the relative frequency of letters in the English
        language. This is a vertical bar chart, also known as a column chart.
        Compare to a horizontal bar chart.
      </p>
      <code className="text-xs text-[#101828] bg-white p-4 border">
        This is sample code block
      </code>
    </div>
    <div className="flex flex-row">
      <div className="pr-5">
        <div className="py-2">
          <h4 className="text-lg text-[#101828] font-bold">
            Fetch data and parse data
          </h4>
          <p className="text-sm text-[#101828]">
            d3.fetch is one of the convenience methods on top of the Fetch API.
            It get a comma-separated values (CSV) file.
          </p>
        </div>
        <div className="py-2">
          <h4 className="text-lg text-[#101828] font-bold">Row conversion</h4>
          <p className="text-sm text-[#101828]">
            If a row conversion function is not specified, field values are
            strings. For safety, there is no automatic conversion to numbers,
            dates, or other types.
          </p>
        </div>
        <div className="py-2">
          <h4 className="text-lg text-[#101828] font-bold">Sort data</h4>
          <p className="text-sm text-[#101828]">
            sort ed quia non numquam eius modi tempora incidunt ut labore et
            dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
      <div className="p-4 border-l-2">
        <h6 className="text-[#6941c6] font-semibold text-sm py-2">Tips</h6>
        <p className="text-sm text-[#101828] font-semibold py-2">
          Other types of files
        </p>
        <p className="text-sm py-2">
          <span className="text-[#6941c6] font-semibold text-sm">JSON: </span>
          ncidunt ut labore et dolore magnam aliquam.
        </p>
        <p className="text-sm py-2">
          <span className="text-[#6941c6] font-semibold text-sm">DSV: </span>
          labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <p className="text-sm py-2">
          <span className="text-[#6941c6] font-semibold text-sm">TSV: </span>
          ncidunt ut labore et dolore magnam aliquam.
        </p>
        <Button className="text-[#6941c6] bg-transparent">Learn more </Button>
      </div>
    </div>
  </div>
);
export default QSImport;
