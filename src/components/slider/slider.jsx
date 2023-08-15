import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react';
export default function Slider({data,text,link}) {
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
        <>
            <div>
                <div className='px-5 flex justify-between'>
                    <span className='mt-3 font-mono text-2xl font-black cursor-default'>{text}</span>
                    <Link href={`/viewall/${link}/1`} className='flex'><span className='font-sans text-fuchsia-500 mt-5 font-medium text-base cursor-pointer forfiveone'>More &#x276F;&#x276F;</span></Link>
                </div>
                <div ref={containerRef} className="flex flex-nowrap overflow-x-scroll overflow-y-hidden scroll-smooth w-screen px-5 x-scrollbar">
                <button className="ScrollLeft" onClick={handelScrollLeft}>&nbsp;&nbsp; &#x276E;&#x276E; &nbsp;&nbsp;&nbsp;&nbsp;</button>
                    {data.map((item) => (
                        <div key={item.ID} className="aspect-video h-40 p-1 rounded mt-5 mb-5">
                            <Link href={`/player/${item.ID}`}><Image className='rounded h-full cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-125 hover:bg-indigo-500 duration-300' src={item.Image} alt={`Image ${item.ID}`} title={item.Title} width={1000} height={1000} /></Link>
                        </div>
                    ))}
                <button className="ScrollRight" onClick={handelScrollRight}>&nbsp;&nbsp;&nbsp;&nbsp; &#x276F;&#x276F; &nbsp;&nbsp;</button>
                </div>
            </div>
        </>
    );
  }