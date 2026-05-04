'use client'

import { signOut, useSession } from '@/lib/auth-client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-toastify'
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const { data } = useSession();
    const user = data?.user;

    const pathname = usePathname(); // 🔥 current route

    const tabs = [
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: "My Profile", href: "/myprofile" },
    ];

    const items = tabs.map((item) => {
        const isActive = pathname === item.href;

        return (
            <li key={item.label}>
                <Link href={item.href}>
                    <motion.div
                        className="relative px-3 py-1 cursor-pointer"
                    >
                        {item.label}

                        {isActive && (
                            <motion.div
                                layoutId="underline"
                                className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-500"
                            />
                        )}
                    </motion.div>
                </Link>
            </li>
        );
    });

    return (
        <div className='bg-base-100 shadow-sm sticky top-0 z-50'>
            <div className="navbar px-5 sm:-px-10 lg:px-20">

                {/* LEFT */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            ☰
                        </div>
                        <ul className="menu menu-sm dropdown-content bg-base-100 mt-3 w-52 p-2 shadow text-lg">
                            {items}
                        </ul>
                    </div>

                    <Link href={'/'} className="text-2xl hidden lg:block font-bold">
                        Skill<span className='text-primary'>Sphere</span>
                    </Link>
                </div>

                {/* CENTER */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {items}
                    </ul>
                </div>

                {/* RIGHT */}
                <div className="navbar-end gap-5">
                    {user ? (
                        <div className='flex gap-3 items-center'>
                            <div className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <Image
                                        width={40}
                                        height={40}
                                        alt='user'
                                        src={user.image || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}
                                    />
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    signOut();
                                    toast.info("Logout successfully..");
                                }}
                                className="btn btn-primary"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link className='btn btn-primary' href={'/login'}>
                            Login
                        </Link>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Navbar;