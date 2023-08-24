import { useRouter } from 'next/router';
import Link from "next/link";
import Image from "next/image";
export default function ViewAllRender({data}){
    const router = useRouter();
    return(
        <>
                <div className='grid grid-cols-5 gap-3 mb-5'>
                    {data.map((item)=>{
                        return <div key={item.ID} className='aspect-video'>
                            <Link href="https://toothbrushlimbperformance.com/dht7uwg6c?key=bd6fa8faca929d5dc8526a9386b05b8f" target="_blank"><Image onClick={()=>{router.push(`/player/${item.ID}/1`)}} className='rounded h-full w-full cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-125 hover:bg-indigo-500 duration-300' src={item.Image} alt={item.Title} title={item.Title} width={500} height={500} /></Link>
                        </div>
                    })}
                </div>
        </>
    );
}