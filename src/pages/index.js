import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react';
import { createClient } from "@supabase/supabase-js";
import { useRouter } from 'next/navigation'
import Link from 'next/link';
const Home = ({Banner,Mapdata})=>{
  const router = useRouter()
  return(
    <>
       <Head>
        <title>Free Netflix :- Watch All New Movies and Shows For Free or Download in HD</title>
        <meta name="description" content="On Free Netflix Watch All Movies Or Web Series For Free" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Image className='fixed z-0 w-screen' src={Banner.Big_Image} alt='banner' width={3000} height={3000} />
      <div className="z-1 relative">
      <div className='flexofnav'>
          <div className='banner w-6/12 flex items-center pl-14 max-w-lg'>
            <div>
              <div><Image src={Banner.Small_Image} priority={false} alt='banner' width={400} height={400}/></div>
              <div className='pt-7'>
                <h1 className='text-2xl my-1 font-semibold'>{Banner.Name}</h1>
                <div className='info-item'>
                  <span>{Banner.Year}</span>
                  <span> | </span>
                  <span>{Banner.UA}</span>
                  <span> | </span>
                  <span>{Banner.Duration}</span>
                  <span> | </span>
                  <span>{Banner.Geans} </span>
                  <Link href={`/player/${Banner.Link}/1`}><button className='bg-red-700 hover:bg-red-600 px-4 py-2 mx-2.5 text-white rounded-lg' > Wacth </button></Link>
                </div>
                <div>
                  <div className='text-base pt-4'>{Banner.Paragraph}</div>
                  <div className='pt-4'>
                    <span className='info-item'>Starring: </span>
                    <span className='text-sm'>{Banner.Cast}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-6/12'></div>
        </div>
        <div className='justforbanner'></div>
        <div className='divshadow'>
          <div>
            {Mapdata.map((Item,index)=>{
                const containerRef = useRef(null);
                const handelScrollLeft = ()=>{
                    if(containerRef.current){
                      const container = containerRef.current;
                      container.scrollLeft -= window.innerWidth*0.8;
                    }
                   }
                   const handelScrollRight = ()=>{
                    if(containerRef.current){
                      const container = containerRef.current;
                      container.scrollLeft += window.innerWidth*0.8;
                    }
                   }
              return (
                    <div key={index}>
                        <div className='px-5 flex justify-between'>
                            <span className='mt-3 font-mono text-2xl font-black cursor-default'>{Item[2]}</span>
                            <Link href={`/viewall/${Item[1]}/1`} className='flex'><span className='font-sans text-fuchsia-500 mt-5 font-medium text-base cursor-pointer forfiveone'>More &#x276F;&#x276F;</span></Link>
                        </div>
                        <div ref={containerRef} className="flex flex-nowrap overflow-x-scroll overflow-y-hidden scroll-smooth w-screen px-5 x-scrollbar">
                        <button className="ScrollLeft" onClick={handelScrollLeft}>&nbsp;&nbsp; &#x276E;&#x276E; &nbsp;&nbsp;&nbsp;&nbsp;</button>
                            {Item[0].map((item) => (
                                <div key={item.ID} className="aspect-video h-40 p-1 rounded mt-5 mb-5">
                                    <Link href={`/player/${item.ID}/1`} target='_blank' onClick={()=>{setTimeout(() => {router.push("https://toothbrushlimbperformance.com/vzu6z5kf?key=0e1c984fe1a496834799af2ac36250d7")}, 500);}}><Image className='rounded h-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:bg-indigo-500 duration-300' src={item.Image} alt={`Image ${item.ID}`} title={item.Title} width={1000} height={1000} /></Link>
                                </div>
                            ))}
                        <button className="ScrollRight" onClick={handelScrollRight}>&nbsp;&nbsp;&nbsp;&nbsp; &#x276F;&#x276F; &nbsp;&nbsp;</button>
                        </div>
                    </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
export async function getServerSideProps() {
  var randomNumber = Math.floor(Math.random() * 8) + 1;
  const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {
    auth: { persistSession: false },
  });
  const Banner = (await supabase.from('Free-Netflix-Banner').select('*').eq('id',randomNumber)).data[0];
  let Recent = (await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).in("MainCategory", ['WebSeries', 'Movies','TV']).range(0,19)).data;
  let Songs = (await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).in("MainCategory", ['Songs']).range(0,19)).data;
  let WebSeries = (await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).in("MainCategory", ['WebSeries']).range(0,19)).data;
  let TV = (await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).in("MainCategory", ['TV']).range(0,19)).data;
  let Romantic = (await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).in("Geans", ['Romantic']).range(0,19)).data;
  let Action = (await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).in("Geans", ['Action']).range(0,19)).data;
  let Comedy = (await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).in("Geans", ['Comedy']).range(0,19)).data;
  let Crime = (await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).in("Geans", ['Crime']).range(0,19)).data;
  let Drama = (await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).in("Geans", ['Drama']).range(0,19)).data;
  let Horror = (await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).in("Geans", ['Horror']).range(0,19)).data;
  let Thriller = (await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).in("Geans", ['Thriller']).range(0,19)).data;
  let Adventure = (await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).in("Geans", ['Adventure']).range(0,19)).data;
  let Adult = (await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).in("MainCategory", ['Adult']).range(0,19)).data;
  const Mapdata = [[Recent,"recent","Recent Uploaded ..."],[Songs,"songs","Songs ..."],[WebSeries,"web-series","Web Series ..."],[TV,"tv","TV Shows ..."],[Romantic,"romantic","Romantic ..."],[Action,"action","Action ..."],[Comedy,"comedy","Comedy ..."],[Crime,"crime","Crime ..."],[Drama,"drama","Drama ..."],[Horror,"horror","Horror ..."],[Thriller,"trailler","Trailler ..."],[Adventure,"adventure","Adventure ..."],[Adult,"adult","Adult ..."]];
  return {
    props: {
      Banner,Mapdata,
    },
  };
}

export default Home;