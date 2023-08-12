import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { Make_A_Song_Request } from "@/components/request/makerequest";
import EmptyViewAllRender from "@/components/viewall/emptyviewall";
export default function Songs() {
  const [pagedata,pagedatavalue] = useState([]);
  const router = useRouter();
  const { page } = router.query;
  const fetch = async()=>{
    const start = (+(page)-1)*49;
    const end = +(page)*49;
    const fetchdat = await Make_A_Song_Request(start,end);
    pagedatavalue(fetchdat);
  }
  useEffect(()=>{
    if(page !== undefined){
        fetch();
    }
  },[page]);
  return(
    <>
       <div className='mt-24'>
        <div className='m-5'>
            {pagedata.length !==0?<>
                <div className='grid grid-cols-5 gap-3'>
                    {pagedata.map((item)=>{
                        return <div key={item.id} className='aspect-video'>
                            <Link href={`/player/youtube/${item.id}`}><Image className='rounded h-full w-full cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-125 hover:bg-indigo-500 duration-300' src={item.image} alt={item.title} title={item.title} width={500} height={500} /></Link>
                        </div>
                    })}
                </div>
            </>:<><EmptyViewAllRender/></>}
        </div>
       </div>
    </>
);
  }