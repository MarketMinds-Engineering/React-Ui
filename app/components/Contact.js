import React from 'react'

const Contact = () => {
  return (
    <>
    
    <section class="text-white body-font relative"style={{backgroundImage: "url('/images/img_vector.png')", backgroundSize: "200% 200%"}}>
  <div class="container px-5 py-24 mx-auto">
  <form action="https://formspree.io/f/mzbngnyq" method="POST">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Feel Free To Contact Us</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Enter The Following Details To Reach Us.</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">

        <div class="p-2 w-1/3">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-white">First Name</label>
            <input  autoComplete="off" type="text" id="name" name="First Name" class="w-full bg-gray-100 bg-opacity-0 rounded border-2 border-white focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>

        <div class="p-2 w-1/3">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-white">Last Name</label>
            <input  autoComplete="off" type="text" id="name" name="Last Name" class="w-full bg-gray-100 bg-opacity-0 rounded border-2 border-white focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>

        <div class="p-2 w-1/3">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-white">Email</label>
            <input  autoComplete="off" type="email" id="email" name="Email" class="w-full bg-gray-100 bg-opacity-0 rounded border-2 border-white focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>

        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-white">Message</label>
            <textarea  autoComplete="off" id="message" name="Message" class="w-full bg-gray-100 bg-opacity-0 rounded border border-2 border-white focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto font-bold text-blue-400 bg-white border-white border-2 py-2 px-8 focus:outline-none hover:bg-white rounded text-lg" type="submit" value="send">Send Message</button>
        </div>
        
      </div>
    </div>
    </form>
  </div>
</section>
    
    </>
  )
}

export default Contact
