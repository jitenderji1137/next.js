import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";
import {RxEnter} from 'react-icons/rx'
import Link from "next/link";
export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();
    return (
        <>
            <div onClick={()=>{router.push("/")}} className="fixed w-screen h-screen backgroundtransprant flex justify-center items-center z-20">
            </div>
            <div className="fixed z-30 w-screen" style={{marginTop:"25vh"}}>
                <div className="w-4/5 backgroundtransprant m-auto py-2.5 px-11 rounded-full border border-fuchsia-950 border-solid">
                    <form onSubmit={(e)=>{e.preventDefault();router.push(`/search/${searchQuery}/1`);}} className="flex">
                        <Link href="/"><Image src="/logo.png" alt="Logo" width={50} height={50}/></Link>
                        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="placeholder-slate-400 focus:outline-none focus:border-transparent focus:ring-red-600 block focus:ring-0 backgroundtransprant w-full rounded-lg border-red-950 border bg-red-300 border-solid px-10 mx-10 bg-transparent text-xl" placeholder="Movies, Shows and more ..." />
                        <button type="submit" className="text-3xl"><RxEnter/></button>
                    </form>
                </div>
            </div>
        </>
    );
  }