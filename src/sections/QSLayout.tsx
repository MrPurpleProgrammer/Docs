import Image from 'next/image';
import bargraph from '../assets/bargraph.svg';

export default function QSLayout(){
    return (<div className='layout-section w-full flex flex-col'>
        <div className="layout-heading-container mb-2">
        <h1 className='text-2xl text-[#101828] font-bold'>Layout</h1>
        <p className='text-sm text-[#101828]'>
            This chart shows the relative frequency of letters in the English language. This is a vertical bar chart, also known as a column chart. Compare to a horizontal bar chart.</p>
        </div>
        <div className="width-margin-conatiner flex flex-row mb-2">
            <div className="combined-container col-span-8">
            <div className="width-heading-container">
                <h4 className='text-lg text-[#101828] font-bold'>Width and Height</h4>
        <p className='text-sm text-[#101828]'>
            x, y empora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
       </div>
       <div className='margin-container'>
         <h4 className='text-lg text-[#101828] font-bold'>Margins</h4>
        <p className='text-sm text-[#101828]'>You idunt ut labore et top, bottom, left, rightempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
       </div>
            <div className="graph-container col-span-4">
                <Image src={bargraph} alt="graph" width={400} height={900}/>
            </div>
        </div>
        <div className="code-container mb-2">
        <h4 className='text-lg text-[#101828] font-bold'>Axes and reference marks</h4>
        <code className='text-xs text-[#101828] bg-white h-[50px]'>This is sample code block</code>
        </div>
        <div className="domain-container mb-2">
        <h4 className='text-lg text-[#101828] font-bold'>Domain</h4>
        <p className='text-sm text-[#101828]'>You idunt ut labore et scaleBand, range empora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
    </div>)
}