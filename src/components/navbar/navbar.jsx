import Link from "next/link";
import { BiSearchAlt2 } from 'react-icons/bi';
import SearchBar from '@/components/search/search'
import { useState } from "react";
export default function Navbar() {
  const [searchbar,searchbarvalue]  =useState(false);
    return (
      <>
      <nav className="flex items-center h-20 fixed w-screen z-10 navshadow top-0 left-0">
        <span className="flex-auto w-1/5"><Link href="/"><h1 className="text-center text-4xl text-red-600 cursor-pointer">Free Netflix</h1></Link></span>
        <span className="flex-auto w-1/2">
            <ul className="flex justify-center items-center">
                <li className="w-1/6 text-center font-sans font-extrabold"><Link href="/movies" className="cursor-pointer hover:text-red-400">Movies</Link></li>
                <li className="w-1/6 text-center font-sans font-extrabold"><Link href="/webseries" className="cursor-pointer hover:text-red-400">Web-Series</Link></li>
                <li className="w-1/6 text-center font-sans font-extrabold"><Link href="/adult" className="cursor-pointer hover:text-red-400">Adult</Link></li>
                <li className="w-1/6 text-center font-sans font-extrabold"><Link href="/youtube" className="cursor-pointer hover:text-red-400">Videos</Link></li>
            </ul>
        </span>
        <span className="flex w-1/4 justify-end mr-5 flex items-center">
            <span className="text-3xl cursor-pointer"><BiSearchAlt2 onClick={()=>{searchbarvalue(true)}}/></span>
            <span className="mx-5"><div className="w-10 h-10 bg-red-700 rounded-full cursor-pointer"></div></span>
        </span>
      </nav>
      {searchbar?<SearchBar button={searchbarvalue}/>:<></>}
      </>
    );
  }