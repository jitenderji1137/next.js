import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation'
const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {
    auth: { persistSession: false },
});
const ViewAll = ({title,MapedData,page,totparem})=>{
    const router = useRouter()
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
                            <Link href={`/player/${item.ID}`} target='_blank' onClick={()=>{setTimeout(() => {router.push("https://toothbrushlimbperformance.com/vzu6z5kf?key=0e1c984fe1a496834799af2ac36250d7")}, 500);}}><Image className='bg-stone-400 rounded h-full w-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:bg-indigo-500 duration-300' src={item.Image} alt={item.Title} title={item.Title} width={500} height={500} /></Link>
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
export const getStaticPaths = async()=>{
    let arr = [];
    const GET = async(part1,part2)=>{return (await supabase.from(process.env.NEXT_PUBLIC_DataBase_Name).select('ID').in(part1, part2)).data.length;}
    for(let a = 1;a<=(Math.ceil((await GET("MainCategory",['WebSeries', 'Movies','TV']))/50));a++){arr.push({params:{viewall:[`recent`,`${a}`]}})}
    for(let a = 1;a<=(Math.ceil((await GET("MainCategory",['TV']))/50));a++){arr.push({params:{viewall:[`tv`,`${a}`]}})}
    for(let a = 1;a<=(Math.ceil((await GET("MainCategory",['Songs']))/50));a++){arr.push({params:{viewall:[`songs`,`${a}`]}})}
    for(let a = 1;a<=(Math.ceil((await GET("MainCategory",['WebSeries']))/50));a++){arr.push({params:{viewall:[`web-series`,`${a}`]}})}
    for(let a = 1;a<=(Math.ceil((await GET("Geans",['Romantic']))/50));a++){arr.push({params:{viewall:[`romantic`,`${a}`]}})}
    for(let a = 1;a<=(Math.ceil((await GET("Geans",['Action']))/50));a++){arr.push({params:{viewall:[`action`,`${a}`]}})}
    for(let a = 1;a<=(Math.ceil((await GET("Geans",['Comedy']))/50));a++){arr.push({params:{viewall:[`comedy`,`${a}`]}})}
    for(let a = 1;a<=(Math.ceil((await GET("Geans",['Crime']))/50));a++){arr.push({params:{viewall:[`crime`,`${a}`]}})}
    for(let a = 1;a<=(Math.ceil((await GET("Geans",['Drama']))/50));a++){arr.push({params:{viewall:[`drama`,`${a}`]}})}
    for(let a = 1;a<=(Math.ceil((await GET("Geans",['Horror']))/50));a++){arr.push({params:{viewall:[`horror`,`${a}`]}})}
    for(let a = 1;a<=(Math.ceil((await GET("Geans",['Thriller']))/50));a++){arr.push({params:{viewall:[`trailler`,`${a}`]}})}
    for(let a = 1;a<=(Math.ceil((await GET("Geans",['Adventure']))/50));a++){arr.push({params:{viewall:[`adventure`,`${a}`]}})}
    for(let a = 1;a<=(Math.ceil((await GET("MainCategory",['Movies']))/50));a++){arr.push({params:{viewall:[`movies`,`${a}`]}})}
    for(let a = 1;a<=(Math.ceil((await GET("MainCategory",['Adult']))/50));a++){arr.push({params:{viewall:[`adult`,`${a}`]}})}
    return{paths: arr,fallback:false,}
  }
export async function getStaticProps(context) {
    const { params } = context;
    const totparem = params.viewall[0];
    let page = +params.viewall[1];
    if(page<=0){
      page = 1;
    }
    const Start = (page - 1)*49;
    const End = page*49;
    var title ;
    var MapedData ;
    const Make_A_Fetch_Request = async(part1,part2)=>{
        MapedData = (await supabase.from(process.env.NEXT_PUBLIC_DataBase_Name).select('ID,Image,Title').order('ID', { ascending: false }).in(part1, part2).range(Start,End)).data;
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