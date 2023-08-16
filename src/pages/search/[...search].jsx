import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ViewAllRender from '@/components/viewall/viewall';
import EmptyViewAllRender from '@/components/viewall/emptyviewall';
import {Make_A_Search_Request} from '@/components/request/makerequest';
export default function Search() {
  const [pagedata,pagedatavalue] = useState([]);
  const router = useRouter();
  const { search } = router.query;
  const data = async()=>{
    const start = (+(search[1])-1)*49;
    const end = +(search[1])*49;
    const query = `%${search[0]}%`;
    const fetchdata = await Make_A_Search_Request(query,start,end);
    pagedatavalue(fetchdata);
  }
  useEffect(()=>{
    if(search !== undefined){
      data();
    }
  },[search]);
  return (
    <>
    <div className='mt-24'>
     <div className='m-5'>
         {pagedata.length !==0?<><ViewAllRender data={pagedata}/></>:<><EmptyViewAllRender/></>}
     </div>
    </div>
    {pagedata.length !==0?<><div className='flex mb-20 w-full justify-center items-center'>
            <button className='bg-red-700 p-2 rounded-md m-3' style={{width:"60px"}} disabled={+search[1]===1} onClick={()=>{if(+search[1]>1){router.push(`/search/${search[0]}/${+search[1]-1}`)}}}>Back</button>
            <button className='bg-red-700 p-2 rounded-md m-3' style={{width:"60px"}} disabled>{search[1]}</button>
            <button className='bg-red-700 p-2 rounded-md m-3' style={{width:"60px"}} onClick={()=>{router.push(`/search/${search[0]}/${+search[1]+1}`)}}>Next</button>
    </div></>:<></>}
 </>
  );
}