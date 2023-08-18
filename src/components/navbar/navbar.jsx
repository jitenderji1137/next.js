import Link from "next/link";
import Image from "next/image";
import { BiSearchAlt2 } from 'react-icons/bi';
import SearchBar from '@/components/search/search'
import Loginpopup from "@/components/login/login";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
export default function Navbar() {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);
  const [searchbar,searchbarvalue] = useState(false);
  const [usertologin,usertologinvalue] = useState(false);
    return (
      <>
      <nav className="navshadow">
        <span><Link href="/"><h1 style={{fontFamily:"Piedra"}}>Free Netflix</h1></Link></span>
        <span>
            <ul>
                <li><Link href="/viewall/movies/1">Movies</Link></li>
                <li><Link href="/viewall/HomePageWebSeriesData/1">Web-Series</Link></li>
                <li><Link href="/viewall/HomePageAdultData/1">Adult</Link></li>
                <li><Link href="/songs/1">Songs</Link></li>
            </ul>
        </span>
        <span>
            <span><BiSearchAlt2 onClick={()=>{searchbarvalue(true)}}/></span>
            <span onClick={()=>{usertologinvalue(true)}}><Image src="https://i.postimg.cc/7LjQBGFx/icon-5404125-1280.png" alt="image" width={100} height={100}/></span>
        </span>
      </nav>
      {searchbar?<SearchBar button={searchbarvalue}/>:<></>}
      {usertologin?<Loginpopup button={usertologinvalue}/>:<></>}
      </>
    );
  }