import React from 'react'
import Plus from "../../public/assets/Plus.svg"
import Image from 'next/image'

const TaskList = () => {
    const tasks = [
        {
            id: 1,
            name: "Learning programming by 12PM"
        },
        {
            id: 2,
            name: "Learn to cook by 1pm"
        },
        {
            id: 3,
            name: "Learn to play guitar by 2pm"
        },
        {
            id: 4,
            name: "Have lunch by 4pm"
        }
    ]

  return (
    <div className='bg-white rounded-lg w-full px-4 pt-4 pb-8 shadow-lg'>
        <div className='flex items-center justify-between mb-4'>
            <h2 className='font-bold'>Daily Task</h2>
            <Image src={Plus} alt='' />
        </div>

        <div className='flex flex-col gap-4 md:gap-2'>
            {
                tasks.map((task) => {
                    return <label key={task.id}>
                    <input type="checkbox" name='task' className='mr-2 appearance-none w-4 h-4 border-2 checked:bg-teal-600' />
                    {task.name}
                </label>
                })
            }
        </div>
    </div>
  )
}

export default TaskList