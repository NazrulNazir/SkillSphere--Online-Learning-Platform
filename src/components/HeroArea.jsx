'use client';
import Image from 'next/image'
import { FaArrowRightLong, FaStar } from 'react-icons/fa6'
import { HiUserGroup } from 'react-icons/hi'
import { IoPlayCircleOutline } from 'react-icons/io5'
import { SiMdbook } from 'react-icons/si'
import { motion } from "framer-motion";

const HeroArea = () => {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='md:flex justify-between pl-7 md:pl-15'>
            <div className='flex flex-col justify-center pt-15 sm:pt-0 pr-5'>
                <p className='bg-base-200 inline-block px-2 py-2 rounded-full text-primary font-bold w-55 text-md text-center'>🚀 Learn. Grow. Success</p>
                <h1 className='text-3xl sm:text-5xl font-bold text-slate-800 mt-8'>Upgrade Your Skills <span className='text-primary'>Today 🚀</span></h1>
                <p className='text-md sm:text-xl mt-4'>Learn from industry experts and unlock your true potential.</p>
                <div className='flex gap-2 sm:gap-5 mt-10'>
                    <button className='py-3 sm:py-2 px-3 bg-primary text-white rounded-full text-md sm:text-lg flex items-center justify-center gap-3'>Explore Courses   <FaArrowRightLong /></button>
                    <button className='px-3 py-3 sm:py-2 bg-white rounded-full text-md sm:text-lg flex items-center justify-center gap-2'>Watch Demo <IoPlayCircleOutline /></button>
                </div>
                <div className='flex gap-5 md:gap-15 text-center mt-15'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <p className='text-primary text-3xl'><HiUserGroup /></p>
                        <h3 className='text-2xl font-bold'>10K+</h3>
                        <p className='text-sm sm:text-lg'>Active Learners</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <p className='text-3xl text-success'><SiMdbook /></p>
                        <h3 className='text-2xl font-bold'>200K+</h3>
                        <p className='text-sm sm:text-lg'>Expert Courses</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <p className='text-3xl text-warning'><FaStar /></p>
                        <h3 className='text-2xl font-bold'>4.8</h3>
                        <p className='text-sm sm:text-lg'>Average Rating</p>
                    </div>
                </div>
            </div>
            <div className='mt-15 sm:mt-0'>
                <Image className='h-150' width={600} height={900} src={'/images/hero.png'} alt={'user ratting'}></Image>
            </div>
        </motion.div>
    )
}

export default HeroArea
