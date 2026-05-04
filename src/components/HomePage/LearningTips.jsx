import React from 'react'
import { AiFillSignal, AiTwotoneTrophy } from 'react-icons/ai'
import { FcGraduationCap } from 'react-icons/fc'
import { MdAccessTime } from 'react-icons/md'
import { PiBookOpenText } from 'react-icons/pi'

const LearningTips = () => {
    return (
        <div className='px-5 sm:px-10 lg:px-15 mb-20'>
            <div className='bg-base-300 py-10 px-8 rounded-2xl'>
                <h1 className='flex items-center text-3xl md:text-4xl font-bold text-neutral-800 gap-3'><FcGraduationCap />Learning Tips</h1>
                <p className='sm:text-xl text-neutral-500 font-semibold mt-4'>Improve your learning skills and achieve your goals faster.
                </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-8'>
                <div className = 'flex gap-4 justify-center items-center'>
                    <p  className='text-4xl text-primary p-3 bg-base-100 rounded-full'><PiBookOpenText /></p>
                    <div>
                        <h2 className='text-2xl font-bold text-neutral-700'>Active Learning</h2>
                        <p className='sm:text-lg text-neutral-600 mt-3'>Take notes, ask questions and engage actievely with the content.</p>
                    </div>
                </div>

                <hr className = 'flex sm:hidden border-gray-300 my-4'/>

                <div className = 'flex gap-4 justify-center items-center'>
                    <p className='text-4xl text-primary p-3 bg-base-100 rounded-full'><MdAccessTime /></p>
                    <div>
                        <h2 className='text-2xl font-bold text-neutral-700'>Time Management</h2>
                        <p className='sm:text-lg text-neutral-600 mt-3'>Create a study schedule and stick to it. Consistencyis the key.</p>
                    </div>
                </div>

                <hr className = 'flex sm:hidden border-gray-300 my-4'/>

                <div className = 'flex gap-4 justify-center items-center'>
                    <p className='text-4xl text-primary p-3 bg-base-100 rounded-full'><AiTwotoneTrophy /></p>
                    <div>
                        <h2 className='text-2xl font-bold text-neutral-700'>Set Goals</h2>
                        <p className='sm:text-lg text-neutral-600 mt-3'>Set small and achievable goals tostay motivated every day.</p>
                    </div>
                </div>

                <hr className = 'flex sm:hidden border-gray-300 my-4'/>

                <div className = 'flex gap-4 justify-center items-center'>
                    <p className='text-3xl text-primary p-3 bg-base-100 rounded-full'><AiFillSignal /></p>
                    <div>
                        <h2 className='text-2xl font-bold text-neutral-700'>Practice Regularlay</h2>
                        <p className='sm:text-lg text-neutral-600 mt-3'>Practice what you learn regularly to build strong foundations.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default LearningTips
