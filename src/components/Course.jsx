import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoIosStar } from 'react-icons/io';

const Course = ({ course }) => {
  const { category, description, image, instructor, level, rating, title, duration } = course;
  return (
    <div className='bg-base-300 px-5 py-5 rounded-lg'>
      <Image className='w-full h-60 mb-5 rounded-lg' height={300} width={300} src={image} alt={title}></Image>
      <h2 className='text-xl md:text-2xl font-bold text-slate-800'>{title}</h2>
      {/* <p className={`${category === 'Development' ? 'bg-primary' : category === 'Design' ? 'bg-secondary' : category === 'Marketing' ? 'bg-success' : 'bg-neutral'} text-white inline-block py-2 px-3 rounded-full`}>{category}</p> */}
      <div className='flex gap-10 justify-between items-center'>
        <p className='mt-3 text-md md:text-lg text-neutral-700 font-semibold'>{category}</p>
        <p className='mt-3 text-md md:text-lg text-neutral-700 font-semibold'>{level}</p>
      </div>
      <p className='flex items-center gap-1 mt-3 text-lg font-bold text-neutral-700'>{rating} <span className='text-amber-500 text-xl'><IoIosStar /></span></p>
      <Link href={`/courses/${course.id}`} className='btn btn-primary w-full mt-4'>View Details</Link>
    </div>
  )
}

export default Course
