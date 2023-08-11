import Image from 'next/image'
import Link from 'next/link'
export default function Slider({data,text,link}) {
    return (
        <>
            <div>
                <div className='px-5 flex justify-between'>
                    <span className='mt-3 font-mono text-2xl font-black cursor-default'>{text}</span>
                    <Link href={`/viewall/${link}/1`}><span className='font-sans text-fuchsia-500 mt-5 font-medium text-base cursor-pointer'>More &#x276F;&#x276F;</span></Link>
                </div>
                <div className="flex flex-nowrap overflow-x-scroll overflow-y-hidden scroll-smooth w-screen px-5 x-scrollbar">
                    {data.map((item) => (
                        <div key={item.ID} className="aspect-video h-40 p-1 rounded mt-5 mb-5">
                            <Link href={`/player/${item.ID}`}><Image className='rounded h-full cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-125 hover:bg-indigo-500 duration-300' src={item.Image} alt={`Image ${item.ID}`} title={item.Title} width={1000} height={1000} /></Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
  }