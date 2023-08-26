import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { createClient } from '@supabase/supabase-js';
const ViewAll = ({title,MapedData,page,totparem})=>{
    return(
        <>
        <Head>
            <title>{`View All - ${title || 'Watching On Free Netflix'}`}</title>
            <meta name="description" content={title || ''} />
        </Head>
        <div className='mt-24'>
            <div className='m-5'>
                <div className='grid grid-cols-5 gap-3 mb-5'>
                    {MapedData.map((item)=>{
                        return <div key={item.ID} className='aspect-video'>
                            <Link href={`/player/${item.ID}/1`}><Image className='bg-stone-400 rounded h-full w-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:bg-indigo-500 duration-300' src={item.Image} alt={item.Title} title={item.Title} width={500} height={500} /></Link>
                        </div>
                    })}
                </div>
            </div>
        </div>
        <div className="flex mb-20 w-full justify-center items-center">
            <Link className="bg-red-700 p-2 rounded-md m-3 text-center" style={{ width: '100px' }} href={page<=1?"#":`/viewall/${totparem}/${page-1}`}>{page === 1 ? 'First Page' : 'Back'}</Link>
            <button className="bg-red-700 p-2 rounded-md m-3" style={{ width: '60px' }} disabled>{page}</button>
            <Link className="bg-red-700 p-2 rounded-md m-3 text-center" style={{ width: '100px' }} href={MapedData.length<50?"#":`/viewall/${totparem}/${page+1}`}>{MapedData.length < 50 ? 'Last Page' : 'Next'}</Link>
        </div>
        </>
    );
}

export async function getServerSideProps(context) {
    const { params } = context;
    const totparem = params.viewall[0];
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);
    let page = +params.viewall[1];
    if(page<=0){
      page = 1;
    }
    const Start = (page - 1)*49;
    const End = page*49;
    var title ;
    var MapedData ;
    const Make_A_Fetch_Request = async(part1,part2)=>{
        MapedData = (await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).in(part1, part2).range(Start,End)).data;
    }
    switch(params.viewall[0]){
    case "recent":
        await Make_A_Fetch_Request("MainCategory",['WebSeries', 'Movies','TV']);
        title = "All Recent Upload ..."
        break;
    case "tv":
        await Make_A_Fetch_Request("MainCategory",['TV']);
        title = "All TV Shows ..."
        break;
    case "songs":
        await Make_A_Fetch_Request("MainCategory",['Songs']);
        title = "All New Songs ..."
        break;
    case "web-series":
        await Make_A_Fetch_Request("MainCategory",['WebSeries']);
        title = "All New Web-Series ..."
        break;
    case "romantic":
        await Make_A_Fetch_Request("Geans",['Romantic']);
        title = "All Romantic Content ..."
        break;
    case "action":
        await Make_A_Fetch_Request("Geans",['Action']);
        title = "All Action Content ..."
        break;
    case "comedy":
        await Make_A_Fetch_Request("Geans",['Comedy']);
        title = "All Comedy Content ..."
        break;
    case "crime":
        await Make_A_Fetch_Request("Geans",['Crime']);
        title = "All Crime Content ..."
        break;
    case "drama":
        await Make_A_Fetch_Request("Geans",['Drama']);
        title = "All Drama Content ..."
        break;
    case "horror":
        await Make_A_Fetch_Request("Geans",['Horror']);
        title = "All Horror Content ..."
        break;
    case "trailler":
        await Make_A_Fetch_Request("Geans",['Thriller']);
        title = "All Thriller Content ..."
        break;
    case "adventure":
        await Make_A_Fetch_Request("Geans",['Adventure']);
        title = "All Adventure Content ..."
        break;
    case "adult":
        await Make_A_Fetch_Request("MainCategory",['Adult']);
        title = "All Adult Content ..."
        break;
    case "movies":
        await Make_A_Fetch_Request("MainCategory",['Movies']);
        title = "All New Movies ..."
        break;
    default:
        await Make_A_Fetch_Request("MainCategory",['Movies']);
        title = "All New Movies ..."
    }        
    return {
      props: {
        title,MapedData,page,totparem
      },
    };
  }

export default ViewAll;