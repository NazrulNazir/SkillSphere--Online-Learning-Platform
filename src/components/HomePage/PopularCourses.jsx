'use client';
import { getPropularCourse } from '@/lib/course'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosStar } from 'react-icons/io';
import { RiArrowRightLongLine } from 'react-icons/ri';

const PopularCourses = () => {
    const courses = getPropularCourse();
    console.log(courses);
    return (
        <div
            className='px-5 sm:px-10 lg:px-15 my-20'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800'>Popular Courses</h1>
                    <p className='sm:text-xl text-neutral-500 font-semibold mt-3'>Top rated courses from our platform</p>
                </div>
                <Link href={'./courses'} className='text-xl text-primary font-bold hidden md:flex'>
                    <div className='flex items-center justify-center gap-3'><span>View All Course</span> <RiArrowRightLongLine /></div>
                </Link>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                {
                    courses.map(course => <motion.div
                        key={course.id}
                        course={course}
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div
                            className='bg-gray-200 pb-8 rounded-lg card flex flex-col'
                        >
                            <Image className='w-full h-60 mb-5 rounded-t-2xl' height={300} width={300} src={course.image} alt={course.title}></Image>
                            <div className='px-5'>
                                <h2 className='text-xl md:text-2xl font-bold text-slate-800 grow'>{course.title}</h2>
                                <p className='text-neutral-700 text-lg font-semibold mt-2 grow'>{course.instructor.name}</p>
                                <p className='flex items-center gap-1 mt-3 text-lg font-bold text-neutral-500 grow'><span className='text-amber-500 text-xl'><IoIosStar /></span> {course.rating} (1,250 reviews)</p>
                                <button className='btn btn-primary w-full mt-4'>Course Details</button>
                            </div>
                        </div>
                    </motion.div>)
                }
            </div>
        </div>
    )
}

export default PopularCourses
