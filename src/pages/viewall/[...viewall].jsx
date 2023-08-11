import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createClient } from "@supabase/supabase-js";
export default function ViewAll(){
    const array =  Array.from({ length: 50 }, (_, index) => index);
    const [pagedata,pagedatavalue] = useState([]);
    const router = useRouter();
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);
    const { viewall } = router.query;
    const FetchData = async ()=>{
        const start = (+(viewall[1])-1)*49;
        const end = +(viewall[1])*49;
        if(viewall[0] === "HomePageRecentUpload"){
            let ArrData = await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).in('MainCategory', ['WebSeries', 'Movies']).range(start,end);
            if(ArrData.data){
                pagedatavalue(ArrData.data);
            }
        }
    }
    useEffect(()=>{
        if(viewall !== undefined){
            FetchData();
        }
    },[viewall])
    return(
        <>
           <div className='mt-24'>
            <div className='m-5'>
                {pagedata.length !==0?<>
                <div className='grid grid-cols-5 gap-3'>
                    {pagedata.map((item)=>{
                        return <div key={item.ID} className='aspect-video'>
                            <Link href={`/player/${item.ID}`}><Image className='rounded h-full w-full cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-125 hover:bg-indigo-500 duration-300' src={item.Image} alt={item.Title} title={item.Title} width={500} height={500} /></Link>
                        </div>
                    })}
                </div>
                </>:<>
                <div className='grid grid-cols-5 gap-3'>
                    {array.map((item)=>{
                        return <div key={item} className='aspect-video'>
                            <Image className='rounded h-full w-full cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-125 hover:bg-indigo-500 duration-300' src={process.env.NEXT_PUBLIC_LOADING_IMAGE} alt="Loading..." width={500} height={500} />
                        </div>
                    })}
                </div>
                </>}
            </div>
           </div>
        </>
    );
}