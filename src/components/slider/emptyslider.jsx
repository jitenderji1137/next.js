import Image from 'next/image'
export default function EmptySlider({text}) {
    return (
        <>
            <div>
                <div>
                    <span>{text}</span>
                    <span>More</span>
                </div>
                <div className="flex flex-nowrap overflow-x-scroll overflow-y-hidden scroll-smooth w-screen px-5 x-scrollbar">
                    {[...Array(10)].map((_, index) => (
                        <div key={index} className="aspect-video h-40 p-1 rounded mt-5 mb-5">
                            <Image className='rounded h-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:bg-indigo-500 duration-300' priority={true} src={process.env.NEXT_PUBLIC_LOADING_IMAGE} alt={`Loading...`} width={1000} height={1000} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
  }