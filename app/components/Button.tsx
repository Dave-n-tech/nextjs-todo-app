import Link from 'next/link'
import React from 'react'

const Button = ({label, path}: {label: string, path?: string}) => {
  return (
    <>
    <Link href={path ? path : ""}>
        <button className='button-color mt-8 md:mb-12 w-full px-28 py-4 rounded-lg font-semibold text-white cursor-pointer'>{label}</button>
    </Link>
    </>
  )
}

export default Button