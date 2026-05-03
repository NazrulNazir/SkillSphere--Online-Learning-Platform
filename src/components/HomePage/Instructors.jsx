import Image from 'next/image'
import { IoIosStar } from 'react-icons/io'

const Instructors = () => {

  const instructors = [
    {
      id: 1,
      name: "Nazrul Nazrul",
      profession: 'Web Developer',
      rating: '4.8 (2,250 reviews)',
      image: 'https://imgcdn.stablediffusionweb.com/2026/3/29/07383f1d-871b-4ba3-9436-2d8017953326.webp'
    },
    {
      id: 2,
      name: "Jobayer Joban",
      profession: 'Data Scientist',
      rating: '4.9 (1,950 reviews)',
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20250525/pngtree-asian-man-in-formal-suit-image_17331007.jpg'
    },
    {
      id: 3,
      name: "Abdullah Al Ahsan",
      profession: 'UI/UX Designer',
      rating: '4.7 (1,450 reviews)',
      image: 'https://images.media.io/gemini-ai-passport-prompt/5.png'

    },
    {
      id: 4,
      name: "Zara Sara",
      profession: 'Full Stack Developer',
      rating: '4.8 (1,750 reviews)',
      image: 'https://img.drz.lazcdn.com/static/bd/p/d64de7310a3b6fae1e94711290fb5ea1.jpg_720x720q80.jpg'
    },
  ]

  return (
    <div className='px-5 sm:px-10 lg:px-15'>
      <h1 className='text-4xl font-bold text-neutral-800 '>Top Instructors</h1>
      <p className='text-xl font-semibold text-neutral-500 mt-3'>Learn from the best industry experts</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-5 mb-15 mt-10'>
        {
          instructors.map(instructor => (
            <div key={instructor.id} className='border border-gray-300 py-8 px-4 flex flex-col justify-center items-center rounded-lg'>
              <Image className="rounded-full w-30 h-30" width={100} height={100} src={instructor.image} alt={instructor.name}></Image>
              <h2 className="mb-3 text-neutral-800 font-bold text-2xl mt-2">{instructor.name}</h2>
              <p className="text-lg text-neutral-700 mb-1">{instructor.profession}</p>
              <p className='font-semibold flex justify-center items-center gap-1 text-lg'><span className='text-amber-500 text-xl'><IoIosStar /></span>{instructor.rating}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Instructors
