import { useState } from "react";
import Link from "next/link";
import { MdHome , MdMovie } from "react-icons/md";
import { FaSearch,FaYoutube } from "react-icons/fa";
import { RiSpyFill } from "react-icons/ri";
import {IoIosVideocam } from "react-icons/io";
import { BsFillPersonFill,BsCCircle } from "react-icons/bs";
import { AiOutlineLinkedin,AiOutlineInstagram,AiOutlineGithub } from "react-icons/ai";
export default function Footer(){
    return(
        <>
        <footer className="bigscreen absolute w-screen">
          <div className="flex justify-between">
            <div className="max-w-sm">
            <h2 className="text-xl font-black font-mono">About Me</h2>
            <p className="text-sm mt-3.5 colorgray">
            A young software developer, starting his professional life, This is a sample website of my work and I will create more like this website , on this website you will get all movies if there is no movie which you want you can message me it will be abilable with in 24 hours.
            </p>
          </div>
          <div className="flex">
            <div className="mx-2.5">
                <h2>Free Netflix</h2>
                <ul className="text-sm marginfor">
                    <li><Link href="/" className="colorgray">Home</Link></li>
                    <li><Link href="/search" className="colorgray">Search</Link></li>
                    <li><Link href="/viewall/movies/1" className="colorgray">Movies</Link></li>
                    <li><Link href="/viewall/HomePageWebSeriesData/1" className="colorgray">Web Series</Link></li>
                    <li><Link href="/viewall/HomePageAdultData/1" className="colorgray">Adult 18+</Link></li>
                </ul>    
            </div>
            <div className="mx-2.5">
                <h2>Contact US</h2>
                <ul className="text-sm marginfor">
                    <li><Link href="https://www.instagram.com/vijayji1137/" className="colorgray">Instagram</Link></li>
                    <li><Link href="https://github.com/jitenderji1137" className="colorgray">Github</Link></li>
                    <li><Link href="https://www.linkedin.com/in/jitender1137/" className="colorgray">LinkedIn</Link></li>
                    <li><Link href="mailto:trademetrader1137@gmail.com" className="colorgray">Email</Link></li>
                    <li><Link href="/" className="colorgray">API Docs</Link></li>
                </ul>    
            </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-between">
                <p style={{display:"flex"}}>Cpoyright <BsCCircle style={{margin:"5px 10px"}}/>2023 - {new Date().getFullYear()} All Rights are Reserved by <Link href="https://www.instagram.com/vijayji1137/" style={{marginLeft:"10px"}}>VIJAYJI1137</Link></p>
                <div className="flex text-3xl">
                    <a href="https://www.instagram.com/vijayji1137/" className="icon1 hover:bg-pink-500">
                        <i><AiOutlineInstagram/></i>
                    </a>
                    <a href="https://www.youtube.com/@trademetrader" className="icon1 hover:bg-red-700">
                        <i><FaYoutube/></i>
                    </a><a href="https://www.linkedin.com/in/jitender1137/" className="icon1 hover:bg-blue-700">
                        <i><AiOutlineLinkedin/></i>
                    </a>
                    <a href="https://github.com/jitenderji1137" className="icon1 hover:bg-stone-950">
                        <i><AiOutlineGithub/></i>
                    </a>
                </div>
            </div>
          </div>
        </footer>
        <div className="smallscreen justify-around">
            <Link href="/"><button className="tab-item">
            <MdHome className="m-auto text-xl"/>
            <span className="text-xs colorgray">Home</span>    
            </button></Link>
            <Link href="/search"><button className="tab-item">
            <FaSearch className="m-auto text-xl"/>
            <span className="text-xs colorgray">Search</span>
            </button></Link>
            <Link href="/viewall/movies/1"><button className="tab-item">
            <MdMovie className="m-auto text-xl"/>
            <span className="text-xs colorgray">Movies</span>    
            </button></Link>
            <Link href="/viewall/HomePageWebSeriesData/1"><button className="tab-item">
            <IoIosVideocam className="m-auto text-xl"/>
            <span className="text-xs colorgray">Series</span>    
            </button></Link>
            <Link href="/viewall/HomePageAdultData/1"><button className="tab-item">
            <RiSpyFill className="m-auto text-xl"/>
            <span className="text-xs colorgray">Videos</span>
            </button></Link>
            <Link href="/"><button className="tab-item">
            <BsFillPersonFill className="m-auto text-xl"/>
            <span className="text-xs colorgray">User</span>    
            </button></Link>
        </div>
        </>
    )
}