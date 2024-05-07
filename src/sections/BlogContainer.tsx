"use client"
import BlogItem from "../components/BlogItem"
import SecondaryBLogComponent from "../components/SecondaryBLogComponent"
import image from '../assets/image.svg';
import postcarditem from '../assets/postcarditem.svg';

export default function BlogContainer() {
return (<div className="w-full h-[800px] pl-5">
    <h1 className="font-semibold text-xl pb-5">Check Out of our Guides</h1>
    <div className="w-full h-[100%] flex flex-row">
    <BlogItem image={image} author="Olivia Rhye • 20 Jan 2022" guide="Alexa Integration Guide" topic=" How do you create compelling presentations that wow your colleagues and impress your managers?"/>
    <div className="col-span-6 flex flex-col justify-items-auto content-evenly pl-5">
    <SecondaryBLogComponent image={postcarditem} author="Phoenix Baker • 19 Jan 2022" guide="Migrating your devices to Lighthouse" topic="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get..."/>
    <SecondaryBLogComponent image={postcarditem} author="Lana Steiner • 18 Jan 2022" guide="Building your API Stack" topic="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..."/>
    <SecondaryBLogComponent image={postcarditem} author="Lana Steiner • 18 Jan 2022" guide="Define a MQTT Protocol" topic="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..."/>
    </div>
    
    </div>
    
</div>)
}