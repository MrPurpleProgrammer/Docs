

export default function QSImport(){
    return (<div className='import-section w-full flex flex-col'>
        <div className="import-heading-container mb-2 mt-3">
        <h1 className='text-2xl text-[#101828] font-bold mb-2'>Import data</h1>
        <p className='text-sm text-[#101828]'>
        This chart shows the relative frequency of letters in the English language. This is a vertical bar chart, also known as a column chart. Compare to a horizontal bar chart.
        </p>
        <code className='text-xs text-[#101828] bg-white h-[300px]'>This is sample code block</code>
        </div>
        <div className="fetch-parse-conatiner flex flex-row mb-3 mt-3">
            <div className="combined-container col-span-8">
            <div className="fetch-heading-container mb-2 mt-3">
                <h4 className='text-lg text-[#101828] font-bold'>Fetch data and parse data</h4>
        <p className='text-sm text-[#101828]'>
        d3.fetch is one of the convenience methods on top of the Fetch API.  It get a comma-separated values (CSV) file. 
            </p>
       </div>
       <div className='row-container mb-2 mt-3'>
         <h4 className='text-lg text-[#101828] font-bold'>Row conversion</h4>
        <p className='text-sm text-[#101828]'>If a row conversion function is not specified, field values are strings. For safety, there is no automatic conversion to numbers, dates, or other types.</p>
        </div>
        <div className='sort-container mb-2 mt-3'>
         <h4 className='text-lg text-[#101828] font-bold'>Sort data</h4>
        <p className='text-sm text-[#101828]'>sort     ed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
       </div>
            <div className="tips-container col-span-4 p-4 border-l-2">
                <h6 className="text-[#6941c6] font-semibold text-sm mb-2">Tips</h6>
                <p className="text-sm text-[#101828] font-semibold mb-2">Other types of files</p>
                <p className="text-sm mb-2">
                    <span className="text-[#6941c6] font-semibold text-sm">JSON: </span>ncidunt ut labore et dolore magnam aliquam.</p>
                <p className="text-sm mb-2">
                    <span className="text-[#6941c6] font-semibold text-sm">DSV: </span>
                    labore et dolore magnam aliquam quaerat voluptatem.</p>
                <p className="text-sm mb-2">
                <span className="text-[#6941c6] font-semibold text-sm">TSV: </span>
                ncidunt ut labore et dolore magnam aliquam.</p>
                <button className="text-[#6941c6]">Learn more </button>
            </div>
        </div>
        
    </div>)
}