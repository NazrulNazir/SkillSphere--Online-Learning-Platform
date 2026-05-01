import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div>
            <div className='h-[80vh] flex flex-col justify-center items-center gap-6'>
                <h1 className='text-7xl text-red-500 font-bold text-center '>Sorry</h1>
                <p className='text-5xl font-bold text-neutral-500 italic'>We Coundn&lsquo;t find that page</p>
                <p className='text-3xl font-bold text-neutral-500'>please searching or go to <Link className='text-primary font-bold' href={'/'}>SkillSphere Home Page</Link></p>
            </div>
        </div>
    )
}

export default NotFound
