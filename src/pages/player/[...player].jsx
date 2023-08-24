import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { createClient } from '@supabase/supabase-js';
import { Make_A_Fetch_Request } from '@/components/request/makerequest';
import ViewAllRender from '@/components/viewall/viewall';
import EmptyViewAllRender from '@/components/viewall/emptyviewall';

export default function Player() {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);
  const router = useRouter();
  const { player } = router.query;
  const [iframe, setIframe] = useState(null);
  const [video, setVideo] = useState({});
  const [image, setImage] = useState('');
  const [pagedata, setPagedata] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(49);

  const fetchBanner = async () => {
    try {
      const response = await supabase
        .from('Free-Netflix-Darabase')
        .select('*')
        .eq('ID', player[0]);

      if (response.data && response.data.length > 0) {
        const videoData = response.data[0];
        setVideo(videoData);
        setImage(videoData.Image);

        let iframeUrl = '';
        if (videoData.Plateform === 'filemoon') {
          iframeUrl = `https://filemoon.sx/e/${videoData.FileID}?poster=${videoData.Image}`;
        } else if (videoData.Plateform === 'Youtube') {
          iframeUrl = `https://www.youtube.com/embed/${videoData.FileID}`;
        } else if (videoData.Plateform === 'Vidsrc') {
          const embedType = videoData.MainCategory === 'TV' ? 'tv' : 'movie';
          iframeUrl = `https://vidsrc.to/embed/${embedType}/${videoData.FileID}`;
        }

        setIframe(iframeUrl);

        const category = videoData.MainCategory;
        const fetchedData = await Make_A_Fetch_Request('MainCategory', [category], start, end);
        setPagedata(fetchedData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    if (player !== undefined) {
      const playerPage = parseInt(player[1], 10);
      const newStart = (playerPage - 1) * 49;
      const newEnd = playerPage * 49;
      setStart(newStart);
      setEnd(newEnd);
      fetchBanner();
    }
  }, [player]);

  return (
    <>
      <Head>
        <title>{`Player - ${video.Title || 'Watching On Free Netflix'}`}</title>
        <meta name="description" content={video.Title || ''} />
      </Head>
      {video && image && iframe ? (
        <>
          <div id="div1" className="aspect-video rounded-lg">
            <iframe
              id='my-iframe'
              frameborder="0"
              allowFullScreen="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              title=""
              width="100%"
              height="100%"
              src={iframe}
            ></iframe>
          </div>
          <h1 className="m-5 text-xl max-w-lg">{video.Title}</h1>
          <Link href="https://beta.publishers.adsterra.com/referral/aKMU588PJU">
            <Image alt="banner" className="rounded-lg w-80 m-5" src={image} width={1000} height={1000} />
          </Link>
        </>
      ) : (
        <div id="div1" className="aspect-video rounded-lg"></div>
      )}
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
      {pagedata.length !== 0 ? <ViewAllRender data={pagedata} /> : <EmptyViewAllRender />}
      {pagedata.length !== 0 && (
        <div className="flex mb-20 w-full justify-center items-center">
          <button
            className="bg-red-700 p-2 rounded-md m-3"
            style={{ width: '100px' }}
            disabled={+player[1] === 1}
            onClick={() => {
              if (+player[1] > 1) {
                router.push(`/player/${player[0]}/${+player[1] - 1}`);
              }
            }}
          >
            {+player[1] === 1 ? 'First Page' : 'Back'}
          </button>
          <button className="bg-red-700 p-2 rounded-md m-3" style={{ width: '60px' }} disabled>
            {+player[1]}
          </button>
          <button
            className="bg-red-700 p-2 rounded-md m-3"
            style={{ width: '100px' }}
            disabled={pagedata.length < 50}
            onClick={() => {
              router.push(`/player/${player[0]}/${+player[1] + 1}`);
            }}
          >
            {pagedata.length < 50 ? 'Last Page' : 'Next'}
          </button>
        </div>
      )}
      <Script async data-cfasync="false" src="//toothbrushlimbperformance.com/0ad2289ea9e1e73bd2b5439c23a4fc36/invoke.js"></Script>
      <Script type='text/javascript' src='//toothbrushlimbperformance.com/8c/89/a3/8c89a37d7a271d17f9442787e948475f.js'></Script>
    </>
  );
}
