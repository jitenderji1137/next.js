import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { createClient } from '@supabase/supabase-js';
const Player = ({ iframeUrl,title,image,page,MapedData,ID}) => {
  return (
    <>
      <Head>
        <title>{`Player - ${title || 'Watching On Free Netflix'}`}</title>
        <meta name="description" content={title || ''} />
      </Head>
      <div id="div1" className="aspect-video rounded-lg">
        <iframe
          frameborder="0"
          allowFullScreen="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title=""
          width="100%"
          height="100%"
          src={iframeUrl}
        ></iframe>
      </div>
      <h1 className="m-5 text-xl max-w-lg">{title}</h1>
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
      <div id="container-0ad2289ea9e1e73bd2b5439c23a4fc36"></div>
      <div className='grid grid-cols-5 gap-3 mb-5'>
        {MapedData.map((item)=>{
            return <div key={item.ID} className='aspect-video'>
                <Link href={`/player/${item.ID}/1`}><Image className='rounded h-full w-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:bg-indigo-500 duration-300' src={item.Image} alt={item.Title} title={item.Title} width={500} height={500} /></Link>
            </div>
        })}
      </div>
      <div className="flex mb-20 w-full justify-center items-center">
        <Link className="bg-red-700 p-2 rounded-md m-3" style={{ width: '100px' }} href={page<=1?"#":`/player/${ID}/${page-1}`}>{page === 1 ? 'First Page' : 'Back'}</Link>
        <button className="bg-red-700 p-2 rounded-md m-3" style={{ width: '60px' }} disabled>{page}</button>
        <Link disabled={MapedData.length < 50} href={`/player/${ID}/${page+1}`}><button className="bg-red-700 p-2 rounded-md m-3" style={{ width: '100px' }} disabled={MapedData.length < 50} >{MapedData.length < 50 ? 'Last Page' : 'Next'}</button></Link>
      </div>
      <Script async data-cfasync="false" src="//toothbrushlimbperformance.com/0ad2289ea9e1e73bd2b5439c23a4fc36/invoke.js"></Script>
      <Script type='text/javascript' src='//toothbrushlimbperformance.com/e3/84/8c/e3848cc2ba52f8c8c8a0c97335996bea.js'></Script>
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  let page = +params.player[1];
  if(page<=0){
    page = 1;
  }
  const Start = (page - 1)*49;
  const End = page*49;
  const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);
  const response = (await supabase.from('Free-Netflix-Darabase').select('*').eq('ID', params.player[0])).data[0];
  const title = response.Title;
  const image = response.Image;
  const fileid = response.FileID;
  const ID = response.ID;
  let iframeUrl = '';
  if (response.Plateform === 'filemoon') {
    iframeUrl = `https://filemoon.sx/e/${fileid}?poster=${image}`;
  } else if (response.Plateform === 'Youtube') {
    iframeUrl = `https://www.youtube.com/embed/${fileid}`;
  } else if (response.Plateform === 'Vidsrc') {
    const embedType = response.MainCategory === 'TV' ? 'tv' : 'movie';
    iframeUrl = `https://vidsrc.to/embed/${embedType}/${fileid}`;
  } else if (response.Plateform === 'vidsrc') {
    const embedType = response.MainCategory === 'TV' ? 'tv' : 'movie';
    iframeUrl = `https://vidsrc.me//embed//${embedType}?imdb=${fileid}`;
  }
  let MapedData = (await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).in('MainCategory', [response.MainCategory]).range(Start,End)).data;
  return {
    props: {
      iframeUrl,
      title,
      image,
      page,
      MapedData,
      fileid,
      ID,
    },
  };
}

export default Player;