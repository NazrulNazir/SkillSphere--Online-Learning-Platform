import Course from '@/components/Course';
import { getCourse } from '@/lib/course'
import React from 'react'

const CoursesPage = () => {

  const courses = getCourse();
  console.log(courses);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-15 mt-15'>
      {
        courses.map(course => <Course key={course.id} course = {course}></Course>)
      }      
    </div>
  )
}

export default CoursesPage
