import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { BiSearchAlt2 } from 'react-icons/bi';
import SearchBar from '@/components/search/search'
import Loginpopup from "@/components/login/login";
import { useState } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
export default function Navbar() {
  const [src,setsrc] = useState("https://i.postimg.cc/7LjQBGFx/icon-5404125-1280.png");
  const [searchbar,searchbarvalue] = useState(false);
  const [usertologin,usertologinvalue] = useState(false);
  const [user, setIsAuthenticated] = useState(false);
  const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_Api_Key,
      authDomain: process.env.NEXT_PUBLIC_Auth_Domain,
      projectId: process.env.NEXT_PUBLIC_Project_Id
  };
  firebase.initializeApp(firebaseConfig);
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if(user.photoURL){
          setsrc(user.photoURL);
        }
        else{
          setsrc("https://i.postimg.cc/7LjQBGFx/icon-5404125-1280.png");
        }
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
    return (
      <>
      <nav className="navshadow">
        <span><Link href="/"><h1 style={{fontFamily:"Piedra"}}>Free Netflix</h1></Link></span>
        <span>
            <ul>
                <li><Link href="/viewall/movies/1">Movies</Link></li>
                <li><Link href="/viewall/HomePageWebSeriesData/1">Web-Series</Link></li>
                <li><Link href="/viewall/HomePageAdultData/1">Adult</Link></li>
                <li><Link href="/viewall/Songs/1">Songs</Link></li>
            </ul>
        </span>
        <span>
            <span><BiSearchAlt2 onClick={()=>{searchbarvalue(true)}}/></span>
            <span onClick={()=>{usertologinvalue(true)}}><Image src={src} alt="image" width={100} height={100}/></span>
        </span>
      </nav>
      {searchbar?<SearchBar button={searchbarvalue}/>:<></>}
      {usertologin?<Loginpopup button={usertologinvalue} url={setsrc} isauth={user} />:<></>}
      </>
    );
  }