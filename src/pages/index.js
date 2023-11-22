import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script';
import { useRef } from 'react';
import { createClient } from "@supabase/supabase-js";
import { useRouter } from 'next/navigation'
import Link from 'next/link';
const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {
  auth: { persistSession: false },
});
const Home = ({Banner,Mapdata})=>{
  const router = useRouter()
  const jsonLdData = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "name": "Free Netflix :- Watch All New Movies and Shows For Free or Download in HD",
    "url": "https://free-netflix.vercel.app/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://free-netflix.vercel.app/search/{search_term_string}/1",
      "query-input": "required name=search_term_string"
    }
  };
  return(
    <>
       <Head>
        <title>Free Netflix :- Watch All New Movies and Shows For Free or Download in HD</title>
        <meta name="description" content="Unlock the ultimate entertainment experience with Free Netflix, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, Free Netflix is your passport to endless entertainment, available anytime, anywhere." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="Free Netflix"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Free Netflix :- Watch All New Movies and Shows For Free or Download in HD"/>
        <meta property="og:description" content="Unlock the ultimate entertainment experience with Free Netflix, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, Free Netflix is your passport to endless entertainment, available anytime, anywhere."/>
        <meta property="og:image" content="https://i.postimg.cc/TPkwsTcK/Screenshot-33.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Free Netflix"/>
        <meta name="twitter:description" content="Unlock the ultimate entertainment experience with Free Netflix, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, Free Netflix is your passport to endless entertainment, available anytime, anywhere."/>
        <meta name="twitter:image" content="https://i.postimg.cc/TPkwsTcK/Screenshot-33.png"/>
        <meta content='Unlock the ultimate entertainment experience with Free Netflix, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, Free Netflix is your passport to endless entertainment, available anytime, anywhere.' name='description'/>
        <meta content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' name='robots'/>
        <meta content='Free Netflix :- Watch All New Movies and Shows For Free or Download in HD' property='og:title'/>
        <meta content='https://free-netflix.vercel.app/' property='og:url'/>
        <meta content='Unlock the ultimate entertainment experience with Free Netflix, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, Free Netflix is your passport to endless entertainment, available anytime, anywhere.' property='og:description'/>
        <meta content='Free Netflix :- Watch All New Movies and Shows For Free or Download in HD' property='og:site_name'/>
        <meta content='netflix,free-netflix,netflixfree,how-to-watch-netflix-for-free,movies,webseries,yomovies,downloadmovies' name='keywords'/>
        <link href='https://free-netflix.vercel.app/' hreflang='en' rel='alternate'/>
        <meta content='https://free-netflix.vercel.app/' name='twitter:domain'/>
        <meta content='From this Website you can watch live free movies and even you can download in 480p and 1080p Full HD , only on nramovies' name='twitter:creator'/>
        <meta content='en_US' property='og:locale'/>
        <meta content='en_GB' property='og:locale:alternate'/>
        <meta content='id_ID' property='og:locale:alternate'/>
        <link href='//1.bp.blogspot.com' rel='dns-prefetch'/>
        <link href='//28.2bp.blogspot.com' rel='dns-prefetch'/>
        <link href='//3.bp.blogspot.com' rel='dns-prefetch'/>
        <link href='//4.bp.blogspot.com' rel='dns-prefetch'/>
        <link href='//2.bp.blogspot.com' rel='dns-prefetch'/>
        <link href='//www.blogger.com' rel='dns-prefetch'/>
        <link href='//maxcdn.bootstrapcdn.com' rel='dns-prefetch'/>
        <link href='//fonts.googleapis.com' rel='dns-prefetch'/>
        <link href='//use.fontawesome.com' rel='dns-prefetch'/>
        <link href='//ajax.googleapis.com' rel='dns-prefetch'/>
        <link href='//resources.blogblog.com' rel='dns-prefetch'/>
        <link href='//feeds.feedburner.com' rel='dns-prefetch'/>
        <link href='//cdnjs.cloudflare.com' rel='dns-prefetch'/>
        <link href='//www.google-analytics.com' rel='dns-prefetch'/>
        <link href='//themes.googleusercontent.com ' rel='dns-prefetch'/>
        <link href='//pagead2.googlesyndication.com' rel='dns-prefetch'/>
        <link href='//googleads.g.doubleclick.net' rel='dns-prefetch'/>
        <link href='//www.gstatic.com' rel='preconnect'/>
        <link href='//www.googletagservices.com' rel='dns-prefetch'/>
        <link href='//static.xx.fbcdn.net' rel='dns-prefetch'/>
        <link href='//tpc.googlesyndication.com' rel='dns-prefetch'/>
        <link href='//apis.google.com' rel='dns-prefetch'/>
        <link href='//www.facebook.com' rel='dns-prefetch'/>
        <link href='//connect.facebook.net' rel='dns-prefetch'/>
        <link href='//twitter.com' rel='dns-prefetch'/>
        <link href='//www.youtube.com' rel='dns-prefetch'/>
        <link href='//www.pinterest.com' rel='dns-prefetch'/>
        <link href='//www.linkedin.com' rel='dns-prefetch'/>
       </Head>
       <Script type="application/ld+json">
          {JSON.stringify(jsonLdData)}
       </Script>
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
                  <Link href={`/player/${Banner.Link}`}><button className='bg-red-700 hover:bg-red-600 px-4 py-2 mx-2.5 text-white rounded-lg' > Wacth </button></Link>
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
                                    <Link href={`/player/${item.ID}`}><Image className='rounded h-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:bg-indigo-500 duration-300' src={item.Image} alt={`Image ${item.ID}`} title={item.Title} width={1000} height={1000} /></Link>
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
export const getStaticProps =  async()=>{
  const GET = async(part1,part2)=>{return (await supabase.from(process.env.NEXT_PUBLIC_DataBase_Name).select('ID,Image,Title').order('ID', { ascending: false }).in(part1, part2).range(0,19)).data}
  const Banner = (await supabase.from(process.env.NEXT_PUBLIC_DataBase_Banner).select('*').eq('id',1)).data[0];
  const Mapdata = [[(await GET("MainCategory",['WebSeries', 'Movies','TV'])),"recent","Recent Uploaded ..."],[(await GET("MainCategory", ['Songs'])),"songs","Songs ..."],[(await GET("MainCategory", ['WebSeries'])),"web-series","Web Series ..."],[(await GET("MainCategory", ['TV'])),"tv","TV Shows ..."],[(await GET("Geans", ['Romantic'])),"romantic","Romantic ..."],[(await GET("Geans", ['Action'])),"action","Action ..."],[(await GET("Geans", ['Comedy'])),"comedy","Comedy ..."],[(await GET("Geans", ['Crime'])),"crime","Crime ..."],[(await GET("Geans", ['Drama'])),"drama","Drama ..."],[(await GET("Geans", ['Horror'])),"horror","Horror ..."],[(await GET("Geans", ['Thriller'])),"trailler","Trailler ..."],[(await GET("Geans", ['Adventure'])),"adventure","Adventure ..."],[(await GET("MainCategory", ['Adult'])),"adult","Adult ..."]];
  return {props: {Banner,Mapdata}};
}
export default Home;
