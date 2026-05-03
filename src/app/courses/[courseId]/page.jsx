import { getCourse } from '@/lib/course';
import Image from 'next/image';
import React from 'react'
import { IoIosStar } from 'react-icons/io';

const CourseDetails = async ({ params }) => {
  const { courseId } = await params;
  console.log(courseId);
  const course = getCourse();

  const details = course.find(crs => crs.id === Number(courseId));
  console.log(details)
  const { category, description, image, instructor, level, rating, title, duration } = details;

  return (
    <div
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      transition={{ duration: 1 }}
      className='flex justify-center items-center my-8 px-5'>
      <div className='bg-base-300 px-10 py-5 rounded-lg max-w-150'>
        <Image className=' mb-5 rounded-lg' height={250} width={450} src={image} alt={title}></Image>
        <h2 className='text-xl md:text-2xl font-bold text-slate-800'>{title}</h2>
        <div className='flex gap-10 items-center'>
          <p className='mt-3 text-md md:text-lg text-primary font-semibold'>{category}</p>
          <p className='flex items-center gap-1 mt-3 text-lg font-bold text-neutral-700'>{rating} <span className='text-amber-500 text-xl'><IoIosStar /></span></p>
        </div>
        <p className='mt-2 text-neutral-700'>{description}</p>
        <div className='flex flex-col'>
          <p className='text-neutral-700'>Instructor - <span className='font-bold'>{instructor}</span></p>
          <p className='text-neutral-700'>Course Duration - <span className='font-bold'>{duration}</span></p>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails
