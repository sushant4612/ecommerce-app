import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores similique illo itaque, esse quia ut, laborum sunt aut minus animi deleniti, perspiciatis nostrum eius quis placeat nemo molestiae? Inventore molestias saepe deleniti, tempora optio praesentium! Maxime omnis accusantium saepe molestiae.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deserunt, reprehenderit cupiditate nemo quas quia excepturi nobis doloremque distinctio voluptatum mollitia omnis temporibus, minus, itaque culpa ipsum quod possimus commodi.</p>
        <b className='text-gray-800'> Our Mission</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ullam animi odit? Iste dolorem saepe perferendis nam mollitia consequuntur, explicabo magnam quia dolor quod neque facere aliquid, modi repudiandae laborum.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt temporibus delectus debitis illo error quis, assumenda fugiat itaque harum maxime!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt temporibus delectus debitis illo error quis, assumenda fugiat itaque harum maxime!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt temporibus delectus debitis illo error quis, assumenda fugiat itaque harum maxime!</p>
        </div>
      </div>

      <NewsLetter/>
    </div>
  )
}

export default About