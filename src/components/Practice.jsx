import Image from "next/image"
import { AiFillSignal} from "react-icons/ai"
import { IoIosStar } from "react-icons/io"
import { LiaTrophySolid } from "react-icons/lia"
import { MdAccessTime } from "react-icons/md"
import { PiUserCheckDuotone } from "react-icons/pi"

const Course = ({details}) => {
    console.log(details);
    const { category, description, image, instructor, level, rating, title, duration } = details;
    return (
        <div>

            <div className='grid grid-cols-3 gap-5 my-8 px-5 mt-20'>

                <div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 2 }}
                    transition={{ duration: 1 }}
                    className='grid grid-cols-3 gap-0 justify-center items-cent col-span-2 bg-base-300  px-5 rounded-xl py-10'>
                    <div className='col-span-1 bordser items-center rounded-xl'>
                        <Image className=' mb-5 rounded-lg h-55' height={250} width={450} src={image} alt={title}></Image>
                    </div>

                    <div className='px-10 rounded-lg max-w-150 col-span-2 mt-5'>
                        <h2 className='text-xl md:text-3xl font-bold text-slate-800'>{title}</h2>
                        <p className='mt-3 text-neutral-500 font-semibold'>{description}</p>

                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-8'>
                            <div className='flex gap-2 justify-center items-center'>
                                <p className='text-xl text-primary p-2 bg-base-100 rounded-full'><PiUserCheckDuotone /></p>
                                <div>
                                    <h2 className='text-xl font-bold text-neutral-700'>Instructor</h2>
                                    <p className=' text-neutral-600 mt-1'>{instructor}</p>
                                </div>
                            </div>

                            <hr className='flex sm:hidden border-gray-300 my-4' />

                            <div className='flex gap-2 justify-center items-center'>
                                <p className='text-xl text-primary p-2 bg-base-100 rounded-full'><MdAccessTime /></p>
                                <div>
                                    <h2 className='text-xl font-bold text-neutral-700'>Duration</h2>
                                    <p className=' text-neutral-600 mt-1'>{duration}</p>
                                </div>
                            </div>

                            <hr className='flex sm:hidden border-gray-300 my-4' />

                            <div className='flex gap-2 justify-center items-center'>
                                <p className='text-xl text-primary p-2 bg-base-100 rounded-full'><LiaTrophySolid /></p>
                                <div>
                                    <h2 className='text-xl font-bold text-neutral-700'>Rating</h2>
                                    <p className=' text-neutral-600 mt-1 flex gap-2'><span className='text-amber-500 text-xl'><IoIosStar /></span>{rating}</p>
                                </div>
                            </div>

                            <hr className='flex sm:hidden border-gray-300 my-4' />

                            <div className='flex gap-2 justify-center items-center'>
                                <p className='text-md text-primary p-2 bg-base-100 rounded-full'><AiFillSignal /></p>
                                <div>
                                    <h2 className='text-xl font-bold text-neutral-700'>Level</h2>
                                    <p className=' text-neutral-600 mt-1'>{level}</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='col-span-1 bg-base-300 px-8 py-10 rounded-xl'>
                    <div>
                        <h2 className='text-3xl font-bold text-neutral-800'>Course Curriculum</h2>
                        <p className='text-neutral-500 font-bold'>45 Lesson. 78h 50min</p>
                    </div>

                    <hr className='my-8 border-neutral-300' />

                    <div className='flex flex-col gap-3'>
                        <div className='list-decimal'>
                            <h3 className='text-xl font-bold text-neutral-700'>Introduction</h3>
                            <p className='text-neutral-500 font-semibold flex gap-8'>5 Lesson <li className='list-disc'>45min</li></p>
                        </div>
                        <div className='list-decimal'>
                            <h3 className='text-xl font-bold text-neutral-700'>HTML & CSS</h3>
                            <p className='text-neutral-500 font-semibold flex gap-8'>3 Lesson <li className='list-disc'>3h 10min</li></p>
                        </div>
                        <div className='list-decimal'>
                            <h3 className='text-xl font-bold text-neutral-700'>JavaScript Basic</h3>
                            <p className='text-neutral-500 font-semibold flex gap-8'>12 Lesson <li className='list-disc'>3h 25min</li></p>
                        </div>
                        <div className='list-decimal'>
                            <h3 className='text-xl font-bold text-neutral-700'>React JS</h3>
                            <p className='text-neutral-500 font-semibold flex gap-8'>8 Lesson <li className='list-disc'>2h 15min</li></p>
                        </div>
                        <div className='list-decimal'>
                            <h3 className='text-xl font-bold text-neutral-700'>Node.js & Express</h3>
                            <p className='text-neutral-500 font-semibold flex gap-8'>6 Lesson <li className='list-disc'>1h 35min</li></p>
                        </div>
                        <div className=''>
                            <h3 className='text-xl font-bold text-neutral-700'>Projects</h3>
                            <p className='text-neutral-500 font-semibold flex gap-8'>4 Lesson <li className='list-disc'>2h 15min</li></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Course
