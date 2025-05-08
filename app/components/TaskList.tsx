import React from 'react'
import Plus from "../../public/assets/Plus.svg"
import Image from 'next/image'

const TaskList = () => {
  return (
    <div className='bg-white rounded-lg w-full px-4 pt-4 pb-8 shadow-lg'>
        <div className='flex items-center justify-between mb-4'>
            <h2 className='font-bold'>Daily Task</h2>
            <Image src={Plus} alt='' />
        </div>

        <div className='flex flex-col gap-4 md:gap-2'>
            <label>
                <input type="checkbox" name='task' className='mr-2' />
                Learn programming by 12pm
            </label>
            <label>
                <input type="checkbox" name='task' className='mr-2'/>
                Learn programming by 12pm
            </label>
            <label>
                <input type="checkbox" name='task' className='mr-2'/>
                Learn programming by 12pm
            </label>
            <label>
                <input type="checkbox" name='task'className='mr-2' />
                Learn programming by 12pm
            </label>
        </div>
    </div>
  )
}

export default TaskList