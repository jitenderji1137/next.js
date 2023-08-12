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
 </>
  );
}