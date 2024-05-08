"use client"
import CardItem from '../components/CardItem'
const CardDataList=[]
export default function Sidebar() {
return (<div className='sidebar-container w-full min-h-fit pl-5 pb-4 pt-10'>
    <style jsx>{`
        .sidemenu {
          margin-bottom: 32px;
        }
        .active{
            background-color:#F9F5FF;
        }
      `}</style>
<ul className="sidemenu flex flex-wrap text-sm font-sm text-center text-gray-500 dark:text-gray-400">
<li className="me-2">
<a href="#" aria-current="page" className="inline-block p-2 text-[#6941c6] active font-semibold">View all</a>
</li>
<li className="me-2">
<a href="#" className="inline-block p-2 hover:text-[#6941c6] hover:bg-[#F9F5FF] font-semibold">Developer Docs</a>
</li>
<li className="me-2">
<a href="#" className="inline-block p-2 hover:text-[#6941c6] hover:bg-[#F9F5FF] font-semibold">Error Codes</a>
</li>
<li className="me-2">
<a href="#" className="inline-block p-2 hover:text-[#6941c6] hover:bg-[#F9F5FF] font-semibold">Example References</a>
</li>
<li className="me-2">
<a href="#" className="inline-block p-2 hover:text-[#6941c6] hover:bg-[#F9F5FF] font-semibold">Methodology</a>
</li>
<li className="me-2">
<a href="#" className="inline-block p-2 hover:text-[#6941c6] hover:bg-[#F9F5FF] font-semibold">Schema References</a>
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