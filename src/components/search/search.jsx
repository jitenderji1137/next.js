import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";
import Script from 'next/script';
import {BsFillXSquareFill} from 'react-icons/bs'
import { createClient } from '@supabase/supabase-js';
import Link from "next/link";
export default function SearchBar({button}) {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();
    const [search,searchresult] = useState([]);
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {
        auth: { persistSession: false },
    });
    const querySearch = async(text)=>{
        setSearchQuery(text);
        const query = `%${text}%`;
        const result = (await supabase.from(process.env.NEXT_PUBLIC_DataBase_Name).select('ID,Image,Title').order('ID', { ascending: false }).ilike('Title', query).range(0,9)).data;
        searchresult(result);
    }
    return (
        <>
            <div onClick={()=>{button(false)}} className="fixed w-screen h-screen backgroundtransprant flex justify-center items-center z-20">
            </div>
            <div className="absolute z-30 w-screen pt-8 backgroundtransprant">
                <div className="w-4/5 backgroundtransprant m-auto py-2.5 px-11 rounded-full border border-fuchsia-950 border-solid">
                    <form onSubmit={(e)=>{e.preventDefault();button(false);router.push(`/search/${searchQuery}/1`);}} className="flex">
                        <Link href="/"><Image src="/logo.png" onClick={()=>{button(false)}} alt="Logo" width={50} height={50}/></Link>
                        <input type="text" value={searchQuery} onChange={(e) => querySearch(e.target.value)} className="placeholder-slate-400 focus:outline-none focus:border-red-950 focus:ring-red-600 block focus:ring-0 backgroundtransprant w-full rounded-lg border-red-950 border bg-red-300 border-solid px-10 mx-10 bg-transparent text-xl" placeholder="Movies, Shows and more ..." />
                        <button onClick={()=>{button(false)}} className="text-3xl"><BsFillXSquareFill/></button>
                    </form>
                </div>
                {search.length !== 0?<>
                    {search.map((item)=>{
                        return <Link href={`/player/${item.ID}`} key={item.ID} className='w-4/5 backgroundtransprant m-auto mt-4 py-2.5 px-11 rounded-lg border border-slate-800 border-solid flex'>
                            <div className='aspect-video h-16'><Image src={item.Image} className='rounded-md' alt={item.Title} title={item.Title} width={500} height={500}/></div>
                            <div className='ml-2.5 text-sm'><h1>{(item.Title).substring(0, 60)}</h1></div>
                        </Link>
                    })}
                </>:<></>}
                <div id="container-0ad2289ea9e1e73bd2b5439c23a4fc36"></div>
            </div>
            <Script async="async" data-cfasync="false" src="//toothbrushlimbperformance.com/0ad2289ea9e1e73bd2b5439c23a4fc36/invoke.js"></Script>
        </>
    );
  }