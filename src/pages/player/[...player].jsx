import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { createClient } from "@supabase/supabase-js";
import {Make_A_Fetch_Request} from '@/components/request/makerequest';
import ViewAllRender from '@/components/viewall/viewall';
import EmptyViewAllRender from '@/components/viewall/emptyviewall';
export default function Player() {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);
  const [iframe,iframevalue] = useState(null);
  const [video,videodata] = useState([]);
  const [image,imagevalue] = useState([]);
  const [pagedata,pagedatavalue] = useState([])
  const [start,startvalue] = useState(0)
  const [end,endvalue] = useState(49)
  const router = useRouter();
  const { player } = router.query;
  const banner = async ()=>{
    let Arrdata = await supabase.from('Free-Netflix-Darabase').select('*').eq('ID',player[0]);
    if(Arrdata.data){
      videodata(Arrdata.data[0]);
      imagevalue(Arrdata.data[0].Image);
      if(Arrdata.data[0].Plateform === "filemoon"){
        iframevalue(`https://filemoon.sx/e/${Arrdata.data[0].FileID}?poster=${Arrdata.data[0].Image}`);
      }
      else if(Arrdata.data[0].Plateform === "Youtube"){
        iframevalue(`https://www.youtube.com/embed/${Arrdata.data[0].FileID}`);
      }
      else if(Arrdata.data[0].Plateform === "Vidsrc"){
        if(Arrdata.data[0].MainCategory === "TV"){
          iframevalue(`https://vidsrc.to/embed/tv/${Arrdata.data[0].FileID}`);
        }else{
          iframevalue(`https://vidsrc.to/embed/movie/${Arrdata.data[0].FileID}`);
        }
      }
      const cat = Arrdata.data[0].MainCategory;
      const fetchdat = await Make_A_Fetch_Request("MainCategory",[cat],start,end);
      pagedatavalue(fetchdat);
    }
  }
  const user = async()=>{  
    const verifyuser = await supabase.auth.getUser();
    console.log(verifyuser.data.user);
  }
  useEffect(()=>{
    user();
    if(player !== undefined){
        startvalue((+(player[1])-1)*49);
        endvalue(+(player[1])*49);
        banner();
    }},[player,start])
  return (
    <>
          <Head>
            <title>Player :- {video.Title} Watching On Free Netflix</title>
            <meta name="description" content={video.Title} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logo.png" />
          </Head>
        {video&&image&&iframe?
          <>
            <div id='div1' className='aspect-video rounded-lg'>
              <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="" width="100%" height="100%" src={iframe}></iframe>
            </div>
            <h1 className='m-5 text-xl max-w-lg'>{video.Title}</h1>
            <Link className='aspect-video' href="https://beta.publishers.adsterra.com/referral/aKMU588PJU"><Image alt="banner" className='rounded-lg w-80 m-5' src={image} width={1000} height={1000} /></Link>
          </>:<><div id='div1' className='aspect-video rounded-lg'></div></>
        }
        <Link href="https://beta.publishers.adsterra.com/referral/aKMU588PJU"><Image alt="banner" style={{margin:"auto",marginBottom:"20px"}} src="https://landings-cdn.adsterratech.com/referralBanners/gif/720x90_adsterra_reff.gif" width={700} height={700} /></Link>
        <div id="container-0ad2289ea9e1e73bd2b5439c23a4fc36"></div>
        {pagedata.length !==0?<><ViewAllRender data={pagedata}/></>:<><EmptyViewAllRender/></>}
        {pagedata.length !==0?<><div className='flex mb-20 w-full justify-center items-center'>
            <button className='bg-red-700 p-2 rounded-md m-3' style={{width:"100px"}} disabled={+player[1]===1} onClick={()=>{if(+player[1]>1){router.push(`/player/${player[0]}/${+player[1]-1}`)}}}>{+player[1]===1?"First Page":"Back"}</button>
            <button className='bg-red-700 p-2 rounded-md m-3' style={{width:"60px"}} disabled>{+player[1]}</button>
            <button className='bg-red-700 p-2 rounded-md m-3' style={{width:"100px"}} disabled={pagedata.length < 50} onClick={()=>{router.push(`/player/${player[0]}/${+player[1]+1}`)}}>{pagedata.length < 50?"Last Page":"Next"}</button>
        </div></>:<></>}
    </>
  );
}