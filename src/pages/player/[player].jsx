import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation'
const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {
  auth: { persistSession: false },
});
const Player = ({ iframeUrl,title,image,MapedData,download}) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{`Player - ${title || 'Watching On Free Netflix'}`}</title>
        <meta name="description" content={title || ''} />
      </Head>
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
      <h1 className="m-5 text-xl max-w-lg">{title}</h1>
      {download!==null?<Link className="bg-red-700 p-2 rounded-md m-5 text-center" style={{ width: '100px' }} href={download} target='_blank'>Download</Link>:<></>}
      <Link href="https://beta.publishers.adsterra.com/referral/aKMU588PJU">
        <Image alt="banner" className="rounded-lg w-80 m-5" src={image} width={1000} height={1000} />
      </Link>
      <Link href="https://beta.publishers.adsterra.com/referral/aKMU588PJU">
        <Image
          alt="banner"
          style={{ margin: 'auto', marginBottom: '20px' }}
          src="https://landings-cdn.adsterratech.com/referralBanners/gif/720x90_adsterra_reff.gif"
          width={700}
          height={700}
        />
      </Link>
      <div id="container-8f469aefc3c6be500c096846b85f6b17"></div>
      <button className="bg-zinc-700 font-semibold p-4 rounded-md m-5 text-xl max-w-lg text-center">Recommendation</button>
      <div className='grid grid-cols-5 gap-3 mb-5'>
        {MapedData.map((item)=>{
            return <div key={item.ID} className='aspect-video'>
                <Link href={`/player/${item.ID}`} target='_blank' onClick={()=>{setTimeout(() => {router.push("https://toothbrushlimbperformance.com/vzu6z5kf?key=0e1c984fe1a496834799af2ac36250d7")}, 500);}}><Image className='bg-stone-400 rounded h-full w-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:bg-indigo-500 duration-300' src={item.Image} alt={item.Title} title={item.Title} width={500} height={500} /></Link>
            </div>
        })}
      </div>
      <Script async="async" data-cfasync="false" src="//toothbrushlimbperformance.com/8f469aefc3c6be500c096846b85f6b17/invoke.js"></Script>
    </>
  );
};
export const getStaticPaths = async()=>{
  const fileID = (await supabase.from('Free-Netflix-Darabase').select('*')).data.map((item)=> item.ID);
  return{
    paths: fileID.map((number)=>({params:{player:`${number}`}})),
    fallback:false,
  }
}
export const getStaticProps =  async(context)=>{
  const player = context.params.player;
  const response = (await supabase.from('Free-Netflix-Darabase').select('*').eq('ID', player)).data[0];
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
  let MapedData = (await supabase.from('Free-Netflix-Darabase').select('ID,Image,Title').order('ID', { ascending: false }).eq('Geans', response.Geans).in('MainCategory', [response.MainCategory]).range(0,49)).data;
  return {
    props: {
      iframeUrl,
      title,
      image,
      MapedData,
      fileid,
      download,
    },
  };
}

export default Player;