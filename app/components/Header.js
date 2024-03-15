
"use client";
import Link from 'next/link';
import Image from 'next/image';
import {FiSearch} from "react-icons/fi";


import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
         
            <Image src="/images/Marketminds_Logo(1).png" width={150} height={150} />
          
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-6 hover:text-gray-900" href="/">
            Home
          </Link>
          <Link className="mr-6 hover:text-gray-900" href="#how-it-works">
            How It Works
          </Link>
          <Link className="mr-6 hover:text-gray-900" href="#faq">
            FAQs
          </Link>
          <Link className="mr-6 hover:text-gray-900" href="#contact">
            Contact
          </Link>
          {session ? (
            <>
              <button className="bg-blue-600 text-white font-bold cursor-pointer px-6 py-2 mr-10" onClick={() => signOut()}>Logout</button>
            </>
          ) : (
            <>
              <Link className="mr-6 hover:text-gray-900" href="/login">
                Login
              </Link>
              <Link href="/registerr">
                <button className="bg-blue-400 text-white font-bold cursor-pointer px-6 py-2 mr-10">Register</button>
              </Link>
            </>
          )}
        </nav>
        <FiSearch style={{ marginRight: '10px', color: 'black', fontSize: '24px' }} />
      </div>
    </header>
  );
};

export default Header;
