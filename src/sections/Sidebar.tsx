"use client"
import CardItem from '../components/CardItem'

export default function Sidebar() {
return (<div className='sidebar-container w-full min-h-fit pl-5'>
<ul className="flex flex-wrap text-sm font-sm text-center text-gray-500 dark:text-gray-400 mb-8">
<li className="me-2">
<a href="#" aria-current="page" className="inline-block p-4 text-[#6941c6] bg-white-80 rounded-t-lg active">View all</a>
</li>
<li className="me-2">
<a href="#" className="inline-block p-4 rounded-t-lg hover:text-[#6941c6] hover:bg-gray">Developer Docs</a>
</li>
<li className="me-2">
<a href="#" className="inline-block p-4 rounded-t-lg hover:text-[#6941c6] hover:bg-gray">Error Codes</a>
</li>
<li className="me-2">
<a href="#" className="inline-block p-4 rounded-t-lg hover:text-[#6941c6] hover:bg-gray">Example References</a>
</li>
<li>
<a href="#" className="inline-block p-4 rounded-t-lg hover:text-[#6941c6] hover:bg-gray">Methodology</a>
</li>
<li className="me-2">
<a href="#" className="inline-block p-4 rounded-t-lg hover:text-[#6941c6] hover:bg-gray">Schema References</a>
</li>
</ul>
<div className="cards-container h-fit flex flex-wrap">
    <CardItem/>
    <CardItem/>
    <CardItem/>
    <CardItem/>
    <CardItem/></div>
</div>)
}