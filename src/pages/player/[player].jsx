import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation'
const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {
  auth: { persistSession: false },
});
const Player = ({ iframeUrl,title,image,MapedData,download,player}) => {
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
  return (
    <>
      <Head>
        <title>{`${title} || Watch All New Movies and Shows For Free or Download in HD`}</title>
        <meta name="description" content={`${title} :- Unlock the ultimate entertainment experience with Free Netflix, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, Free Netflix is your passport to endless entertainment, available anytime, anywhere.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content={`${title} :- On Free Netflix`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content={`${title} :- On Free Netflix`}/>
        <meta property="og:description" content={`${title} :- Unlock the ultimate entertainment experience with Free Netflix, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, Free Netflix is your passport to endless entertainment, available anytime, anywhere.`}/>
        <meta property="og:image" content={image}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={`${title} :- On Free Netflix`}/>
        <meta name="twitter:description" content={`${title} :- Unlock the ultimate entertainment experience with Free Netflix, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, Free Netflix is your passport to endless entertainment, available anytime, anywhere.`}/>
        <meta name="twitter:image" content={image}/> 
        <meta content={`${title} :- Unlock the ultimate entertainment experience with Free Netflix, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, Free Netflix is your passport to endless entertainment, available anytime, anywhere.`} name='description'/>
        <meta content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' name='robots'/>
        <meta content={`${title} || Watch All New Movies and Shows For Free or Download in HD`} property='og:title'/>
        <meta content={`https://free-netflix.vercel.app/player/${player}`} property='og:url'/>
        <meta content={`${title} :- Unlock the ultimate entertainment experience with Free Netflix, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, Free Netflix is your passport to endless entertainment, available anytime, anywhere.`} property='og:description'/>
        <meta content={`${title} || Watch All New Movies and Shows For Free or Download in HD`} property='og:site_name'/>
        <meta content={`'${title},netflix,free-netflix,netflixfree,how-to-watch-netflix-for-free,movies,webseries,yomovies,downloadmovies'`} name='keywords'/>
        <link href={`https://free-netflix.vercel.app/player/${player}`} hreflang='en' rel='alternate'/>
        <meta content={`https://free-netflix.vercel.app/player/${player}`} name='twitter:domain'/>
        <meta content={`${title} || Watch All New Movies and Shows For Free or Download in HD`} name='twitter:creator'/>
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
      <div id="div1" className="aspect-video rounded-lg">
        <iframe
          frameBorder="0"
          allowFullScreen="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title=""
          width="100%"
          height="100%"
          src={iframeUrl}
        ></iframe>
      </div>
      <div style={{display:"flex",justifyContent:"center",width:"100vw",margin:"50px 0"}}><div style={{display:"flex",alignItems:"center"}}><span style={{color:"red"}}>Disclamer :- </span><p> If Iframe Shows any error then please <Link href={`/player/${player}`} style={{color:"orange"}}>Refresh</Link> Page</p></div></div>
      <h1 className="m-5 text-2xl max-w-lg">{title}</h1>
      {download!==null?<Link className="bg-red-700 p-2 rounded-md m-5 text-center" style={{ width: '100px' }} href={download} target='_blank'>Download</Link>:<></>}
      <Link href="https://beta.publishers.adsterra.com/referral/aKMU588PJU">
        <Image alt="banner" className="playerimage rounded-lg w-80 m-5" src={image} width={1000} height={1000} />
      </Link>
      <Link href="https://beta.publishers.adsterra.com/referral/aKMU588PJU">
        <Image
          alt="banner"
          style={{ margin: '20px 0 20px 0'}}
          src="https://landings-cdn.adsterratech.com/referralBanners/gif/720x90_adsterra_reff.gif"
          width={700}
          height={700}
        />
      </Link>
      <div id="container-8f469aefc3c6be500c096846b85f6b17"></div>
      <button className="recommedbut bg-zinc-700 font-semibold p-4 rounded-md m-5 text-xl max-w-lg text-center">Recommendation</button>
      <div className='grid grid-cols-5 gap-3 mb-16'>
        {MapedData.map((item)=>{
            return <div key={item.ID} className='aspect-video'>
                <Link href={`/player/${item.ID}`} target='_blank' onClick={()=>{setTimeout(() => {router.push("https://playgroundordinarilymess.com/w87yhs080q?key=005916bb020799a6a7fb36594e6acc66")}, 500);}}><Image className='bg-stone-400 rounded h-full w-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:bg-indigo-500 duration-300' src={item.Image} alt={item.Title} title={item.Title} width={500} height={500} /></Link>
            </div>
        })}
      </div>
      <Script async="async" data-cfasync="false" src="//toothbrushlimbperformance.com/8f469aefc3c6be500c096846b85f6b17/invoke.js"></Script>
    </>
  );
};
export const getStaticPaths = async()=>{
  const fileID = (await supabase.from(process.env.NEXT_PUBLIC_DataBase_Name).select('ID')).data.map((item)=> item.ID);
  return{
    paths: fileID.map((number)=>({params:{player:`${number}`}})),
    fallback:false,
  }
}
export const getStaticProps =  async(context)=>{
  const player = context.params.player;
  const response = (await supabase.from(process.env.NEXT_PUBLIC_DataBase_Name).select('*').eq('ID', player)).data[0];
  const title = response.Title;
  const image = response.Image;
  const fileid = response.FileID;
  let download = null;
  let iframeUrl = '';
  if (response.Plateform === 'filemoon') {
    iframeUrl = `https://filemoon.sx/e/${fileid}?poster=${image}`;
    download = `https://filemoon.sx/download/${fileid}`
  } else if (response.Plateform === 'Youtube') {
    iframeUrl = `https://www.youtube.com/embed/${fileid}`;
  } else if (response.Plateform === 'Vidsrc') {
    const embedType = response.MainCategory === 'TV' ? 'tv' : 'movie';
    iframeUrl = `https://vidsrc.to/embed/${embedType}/${fileid}`;
  } else if (response.Plateform === 'vidsrc') {
    const embedType = response.MainCategory === 'TV' ? 'tv' : 'movie';
    iframeUrl = `https://vidsrc.me//embed//${embedType}?imdb=${fileid}`;
  } else if (response.Plateform === 'streamtape') {
    iframeUrl = `https://antiadtape.com/e/${fileid}?thumb=${image}`;
    download = `https://antiadtape.com/v/${fileid}`
  }
  let MapedData = (await supabase.from(process.env.NEXT_PUBLIC_DataBase_Name).select('ID,Image,Title').order('ID', { ascending: false }).eq('Geans', response.Geans).in('MainCategory', [response.MainCategory]).range(0,49)).data;
  return {
    props: {
      iframeUrl,
      title,
      image,
      MapedData,
      fileid,
      download,
      player,
    },
  };
}

export default Player;