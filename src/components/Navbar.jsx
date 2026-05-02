'use client'

import { signOut, useSession } from '@/lib/auth-client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {

    const { data, isPending } = useSession();
    // console.log(data);
    const user = data?.user;

    const items = <>
        <li className='text-lg font-semibold'><Link href={'/'}>Home</Link></li>
        <li className='text-lg font-semibold'><Link href={'/courses'}>Courses</Link></li>
        <li className='text-lg font-semibold'><Link href={'/myprofile'}>My Profile</Link></li>
    </>

    return (
        <div className='bg-base-100 shadow-sm sticky top-0 z-50'>
            <div className="navbar px-5 sm:-px-10 lg:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold text-2xl">
                            {items}
                        </ul>
                    </div>
                    <button className="text-2xl hidden lg:block font-bold">Skill<span className='text-primary'>Sphere</span></button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-2xl">
                        {items}
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <div>
                        {user ? <div className='flex gap-3'>
                            <button onClick={() => signOut()} href={'/login'} className="btn btn-primary">SignOut</button>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {/* https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp */}
                                    <Image width={500}
                                        height={500} alt='user' src={user.image || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}></Image>
                                </div>
                            </div>
                        </div> :
                            <div>
                                <Link className='btn btn-primary' href={'/login'}>Login</Link>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
