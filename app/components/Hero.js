import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
    <section class="text-gray-600 body-font ml-10 mr-10">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Provide You With A Awesome {"\n"} AI Driven
      </h1>
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">AI Driven
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Get Started</button>
       <Link href={"/about"}>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">How It Works</button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
          <Image className="object-cover object-center rounded" src="/images/Hero (1).png" width={400} height={400} />
          <Image className="object-cover object-center rounded absolute bottom-0 right-0 mr-20" src="/images/Hero (2).png" width={200} height={200} />
        </div>
  </div>
</section>
</>
  )
}

export default Hero
