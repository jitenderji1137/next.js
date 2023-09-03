import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation'
const Search = ({SearchText,MapedData,page})=>{
  const router = useRouter()
  return(
    <>
        <Head>
            <title>{`Search - ${SearchText || 'Watching On Free Netflix'} results on free netflix`}</title>
            <meta name="description" content={SearchText || ''} />
        </Head>
        <div className='mt-24'>
          <div className='m-5'>
          <div className='grid grid-cols-5 gap-3 mb-5'>
                {MapedData.map((item)=>{
                    return <div key={item.ID} className='aspect-video'>
                          <Link href={`/player/${item.ID}`} target='_blank' onClick={()=>{setTimeout(() => {router.push("https://toothbrushlimbperformance.com/vzu6z5kf?key=0e1c984fe1a496834799af2ac36250d7")}, 500);}}><Image className='rounded h-full w-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:bg-indigo-500 duration-300' src={item.Image} alt={item.Title} title={item.Title} width={500} height={500} /></Link>
                        </div>
                    })}
                </div>
          </div>
        </div>
        <div className="flex mb-20 w-full justify-center items-center">
            <Link className="bg-red-700 p-2 rounded-md m-3 text-center" style={{ width: '100px' }} href={page<=1?"#":`/search/${SearchText}/${page-1}`}>{page === 1 ? 'First Page' : 'Back'}</Link>
            <button className="bg-red-700 p-2 rounded-md m-3" style={{ width: '60px' }} disabled>{page}</button>
            <Link className="bg-red-700 p-2 rounded-md m-3 text-center" style={{ width: '100px' }} href={MapedData.length<50?"#":`/search/${SearchText}/${page+1}`}>{MapedData.length < 50 ? 'Last Page' : 'Next'}</Link>
        </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const { params } = context;
  let page = +params.search[1];
  if(page<=0){
    page = 1;
  }
  const Start = (page - 1)*49;
  const End = page*49;
  const SearchText = params.search[0];
  const query = `%${SearchText}%`;
  const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {
    auth: { persistSession: false },
  });
  const MapedData = (await supabase.from(process.env.NEXT_PUBLIC_DataBase_Name).select('ID,Image,Title').order('ID', { ascending: false }).ilike('Title', query).range(Start,End)).data;
  return {
    props: {
      SearchText,MapedData,page
    },
  };
}
export default Search;