import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen' >

{/* Container */}
<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-pink-600'>Hi, my name is</p>
    <h1 className='text-4xl sm:text-7xl font-extrabold text-[#ccd6f6] '>Harjot Gill</h1>
    <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a Software Developer</h2>
    <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatem asperiores aliquid voluptas. 
        Fuga est iste sit ipsum provident aperiam pariatur iure ipsam nobis quae porro, cumque at quo ipsa vero repellendus facere officiis eos commodi praesentium reprehenderit, quod eligendi consectetur! 
        Ducimus minima quaerat nulla voluptatem est dignissimos doloribus maxime at debitis molestias quibusdam a minus nobis vero omnis sunt, nemo totam inventore facere quidem eos doloremque. 
        Reiciendis sint nulla fuga optio neque autem voluptate reprehenderit at quas deserunt ipsa assumenda animi atque harum, eligendi iste pariatur obcaecati quibusdam enim vel ab ipsam aperiam vero delectus! 
        Excepturi perspiciatis sit dolorum?</p>
        <div>
            <button className='text-white border-2 px-6 py-3 my-2 items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
            <span className='group-hover:rotate-90 duration-300'>
  <HiArrowNarrowRight className='ml-3' />
            </span>

            </button>
        </div>
</div>
    </div>
  )
}

export default Home