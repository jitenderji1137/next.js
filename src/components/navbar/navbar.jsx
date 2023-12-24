import Link from "next/link";
import Image from "next/image";
import { BiSearchAlt2 } from 'react-icons/bi';
import SearchBar from '@/components/search/search'
import { useState } from "react";
export default function Navbar() {
  const [searchbar,searchbarvalue] = useState(false);
    return (
      <>
      <nav className="navshadow">
        <span><Link href="/"><h1 style={{fontFamily:"Piedra"}}>Free Netflix</h1></Link></span>
        <span>
            <ul>
                <li><Link href="/viewall/movies/1">Movies</Link></li>
                <li><Link href="/viewall/web-series/1">Web-Series</Link></li>
                <li><Link href="/viewall/tv/1">TV</Link></li>
                <li><Link href="/viewall/songs/1">Songs</Link></li>
                <li><Link href="/viewall/adult/1">Adult</Link></li>
            </ul>
        </span>
        <span>
            <span><BiSearchAlt2 onClick={()=>{searchbarvalue(true)}}/></span>
        </span>
      </nav>
      {searchbar?<SearchBar button={searchbarvalue}/>:<></>}
      </>
    );
  }