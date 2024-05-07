import React from 'react'
import Feedback from '../../components/Feedback'
import VerticalSidebar from '@/components/VerticalSidebar'
import QuickStart from '@/sections/QuickStart'
import SetUp from '@/sections/SetUp'

export default function GettingStarted() {
  return (
    <div className='h-full w-full flex-row justify-between items-start grid grid-cols-12 px-20 gap-2'>
      
      <VerticalSidebar/>

      <div className='main-content col-span-6'>
        <QuickStart/>
        <hr className='w-[90%]'/>
        <SetUp/>
        <hr className='w-[90%]'/>
      </div>


      <Feedback/>
      </div>
  )
}
