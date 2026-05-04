'use client'
import Image from 'next/image';
import Link from 'next/link';
import { IoIosStar } from 'react-icons/io';
import { motion } from "framer-motion";

const Course = ({ course }) => {
  const { category, description, image, instructor, level, rating, title, duration } = course;
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className='bg-base-300 pb-5 rounded-lg card'>
      <Image className='w-full h-60 mb-5 rounded-t-lg' height={300} width={300} src={image} alt={title}></Image>
      <div className='px-5'>
        <h2 className='text-xl md:text-2xl font-bold text-slate-800'>{title}</h2>
        <div className='flex gap-10 justify-between items-center'>
          <p className='mt-3 text-md md:text-lg text-neutral-700 font-semibold'>{category}</p>
          <p className='mt-3 text-md md:text-lg text-neutral-700 font-semibold'>{level}</p>
        </div>
        <p className='flex items-center gap-1 mt-3 text-lg font-bold text-neutral-700'>{rating} <span className='text-amber-500 text-xl'><IoIosStar /></span></p>
        <Link
          href={`/courses/${course.id}`} className='btn btn-primary w-full mt-4'>Course Details</Link>
      </div>
    </motion.div>
  )
}

export default Course
