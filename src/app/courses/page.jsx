'use client';

import Course from '@/components/Course';
// import Practice from '@/components/Practice';
import { getCourse } from '@/lib/course'
// import Image from 'next/image';
import React, { useState } from 'react'
const CoursesPage = () => {
  const courses = getCourse();

  const [search, setSearch] = useState('');
  const filtered = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  // const course = courses.map(course);
  // console.log(course)


  // console.log(courses);
  return (
    <div className='mt-10 px-15'>
      <h1 className='text-4xl font-bold text-neutral-800 mb-10'>All Courses</h1>
      <div className='flex gap-2 justify-start items-center'>
        <label className="input border border-gray-500">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search" />
        </label>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
        {
          filtered.map(course => <Course key={course.id} course={course}></Course>)
        }
      </div>
        {/* <Practice></Practice> */}
    </div>
  )
}

export default CoursesPage
