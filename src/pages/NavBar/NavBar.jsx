import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
   

    return (
        <>

<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
    <img src="images/abc.png" className="h-16 w-16 rounded-full" alt="Logo" />
        <div className="flex items-center space-x-6 rtl:space-x-reverse">

            <a href="tel:5541251234" className="text-sm  text-blue-600 font-extrabold underline dark:text-white hover:underline">Home</a>
            <a href="tel:5541251234" className="text-sm  text-gray-500 dark:text-white hover:underline">How its Work</a>

            <a href="tel:5541251234" className="text-sm  text-gray-500 dark:text-white hover:underline">FAQs</a>
            <a href="tel:5541251234" className="text-sm  text-gray-500 dark:text-white hover:underline">ContactUs</a>
            <button
    type="button"
    className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
  >
Register  </button>
        </div>
    </div>
</nav>

</>
    );
};

export default NavBar;