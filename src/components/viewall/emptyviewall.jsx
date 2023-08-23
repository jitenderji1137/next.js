import Image from "next/image";
export default function EmptyViewAllRender(){
    const array =  Array.from({ length: 50 }, (_, index) => index);
    return(
        <>
                <div className='grid grid-cols-5 gap-3 mb-5'>
                    {array.map((item)=>{
                        return <div key={item} className='aspect-video'>
                            <Image className='rounded h-full w-full cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-125 hover:bg-indigo-500 duration-300' src={process.env.NEXT_PUBLIC_LOADING_IMAGE} alt="Loading..." width={500} height={500} />
                        </div>
                    })}
                </div>
        </>
    );
}