import Link from 'next/link';
import Image from 'next/image';
export default function MainBanners({banners}){
    return(
        <>
        <div className='flexofnav'>
          <div className='banner w-6/12 flex items-center pl-14 max-w-lg'>
            <div>
              <div><Image src={banners.Small_Image} priority={false} alt='banner' width={400} height={400}/></div>
              <div className='pt-7'>
                <h1 className='text-2xl my-1 font-semibold'>{banners.Name}</h1>
                <div className='info-item'>
                  <span>{banners.Year}</span>
                  <span> | </span>
                  <span>{banners.UA}</span>
                  <span> | </span>
                  <span>{banners.Duration}</span>
                  <span> | </span>
                  <span>{banners.Geans} </span>
                  <Link href={`/player/${banners.Link}/1`}><button className='bg-red-700 hover:bg-red-600 px-4 py-2 mx-2.5 text-white rounded-lg' > Wacth </button></Link>
                </div>
                <div>
                  <div className='text-base pt-4'>{banners.Paragraph}</div>
                  <div className='pt-4'>
                    <span className='info-item'>Starring: </span>
                    <span className='text-sm'>{banners.Cast}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-6/12'></div>
        </div>
        </>
    );
}