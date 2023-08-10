import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from "react";
import Slider from '@/components/slider/slider'
import EmptySlider from '@/components/slider/emptyslider'
import { createClient } from "@supabase/supabase-js";
export default function Home() {
  var randomNumber = Math.floor(Math.random() * 4) + 1;
  const [banners,bannersvalue] = useState([]);
  const [recentuploaded,recentuploadedvalue] = useState([]);
  const [webseries,webseriesvalue] = useState([]);
  const [movies,romanticvalue] = useState([]);
  const [action,actionvalue] = useState([]);
  const [comedy,comedyvalue] = useState([]);
  const [crime,crimevalue] = useState([]);
  const [drame,dramavalue] = useState([]);
  const [horror,horrorvalue] = useState([]);
  const [trailer,trailerdata] = useState([]);
  const [adventure,adventurevalue] = useState([]);
  const [adult,adultvalue] = useState([]);
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);
  const banner = async ()=>{
    let Arrdata = await supabase.from('Free-Netflix-Banner').select('*').eq('id',randomNumber);
    if(Arrdata.data){
      localStorage.setItem("HomePageBanners", JSON.stringify(Arrdata.data[0]));
      bannersvalue(Arrdata.data[0]);
    }
  }
  const data = async ()=>{    
      let ArrData = await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).in('MainCategory', ['WebSeries', 'Movies']).range(0,19);
      if(ArrData.data){
        localStorage.setItem("HomePageRecentUpload", JSON.stringify(ArrData.data));
        recentuploadedvalue(ArrData.data);
      }
  }
  const webseriesdata = async ()=>{    
    let ArrData = await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).eq("MainCategory","WebSeries").range(0,19);
    if(ArrData.data){
      localStorage.setItem("HomePageWebSeriesData", JSON.stringify(ArrData.data));
      webseriesvalue(ArrData.data);
    }
  }
  const romanticdata = async ()=>{    
    let ArrData = await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).eq("Geans","Romantic").range(0,19);
    if(ArrData.data){
      localStorage.setItem("HomePageRomanticData", JSON.stringify(ArrData.data));
      romanticvalue(ArrData.data);
    }
  }
  const actiondata = async ()=>{    
    let ArrData = await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).eq("Geans","Action").range(0,19);
    if(ArrData.data){
      localStorage.setItem("HomePageActionData", JSON.stringify(ArrData.data));
      actionvalue(ArrData.data);
    }
  }
  const comedydata = async ()=>{    
    let ArrData = await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).eq("Geans","Comedy").range(0,19);
    if(ArrData.data){
      localStorage.setItem("HomePageComedyData", JSON.stringify(ArrData.data));
      comedyvalue(ArrData.data);
    }
  }
  const crimedata = async ()=>{    
    let ArrData = await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).eq("Geans","Crime").range(0,19);
    if(ArrData.data){
      localStorage.setItem("HomePageCrimeData", JSON.stringify(ArrData.data));
      crimevalue(ArrData.data);
    }
  }
  const dramadata = async ()=>{    
    let ArrData = await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).eq("Geans","Drama").range(0,19);
    if(ArrData.data){
      localStorage.setItem("HomePageDramaData", JSON.stringify(ArrData.data));
      dramavalue(ArrData.data);
    }
  }
  const horrordata = async ()=>{    
    let ArrData = await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).eq("Geans","Horror").range(0,19);
    if(ArrData.data){
      localStorage.setItem("HomePageHorrorData", JSON.stringify(ArrData.data));
      horrorvalue(ArrData.data);
    }
  }
  const traillerdata = async ()=>{    
    let ArrData = await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).eq("Geans","Thriller").range(0,19);
    if(ArrData.data){
      localStorage.setItem("HomePageTraillerData", JSON.stringify(ArrData.data));
      trailerdata(ArrData.data);
    }
  }
  const adventuredata = async ()=>{    
    let ArrData = await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).eq("Geans","Adventure").range(0,19);
    if(ArrData.data){
      localStorage.setItem("HomePageAdventureData", JSON.stringify(ArrData.data));
      adventurevalue(ArrData.data);
    }
  }
  const adultdata = async ()=>{    
    let ArrData = await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).eq("MainCategory","Adult").range(0,19);
    if(ArrData.data){
      localStorage.setItem("HomePageAdultData", JSON.stringify(ArrData.data));
      adultvalue(ArrData.data);
    }
  }
  useEffect(()=>{
      bannersvalue(JSON.parse(localStorage.getItem("HomePageBanners")) || []);
      banner();
      recentuploadedvalue(JSON.parse(localStorage.getItem("HomePageRecentUpload")) || []);
      webseriesvalue(JSON.parse(localStorage.getItem("HomePageWebSeriesData")) || []);
      romanticvalue(JSON.parse(localStorage.getItem("HomePageRomanticData")) || []);
      actionvalue(JSON.parse(localStorage.getItem("HomePageActionData")) || []);
      comedyvalue(JSON.parse(localStorage.getItem("HomePageComedyData")) || []);
      crimevalue(JSON.parse(localStorage.getItem("HomePageCrimeData")) || []);
      dramavalue(JSON.parse(localStorage.getItem("HomePageDramaData")) || []);
      horrorvalue(JSON.parse(localStorage.getItem("HomePageHorrorData")) || []);
      trailerdata(JSON.parse(localStorage.getItem("HomePageTraillerData")) || []);
      adventurevalue(JSON.parse(localStorage.getItem("HomePageAdventureData")) || []);
      adultvalue(JSON.parse(localStorage.getItem("HomePageAdultData")) || []);
      data();
      webseriesdata();
      romanticdata();
      actiondata();
      comedydata();
      crimedata();
      dramadata();
      horrordata();
      traillerdata();
      adventuredata();
      adultdata();
  },[])
  return (
    <>
      <Head>
        <title>Free Netflix :- Watch All New Movies and Shows For Free or Download in HD</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Image className='fixed z-0 w-screen' src={banners.Big_Image} alt='banner' width={3000} height={3000} />
      <div className="z-1 relative">
        <div className='flex' style={{height:"80vh"}}>
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
                  <button className='bg-red-700 hover:bg-red-600 px-4 py-2 mx-2.5 text-white rounded-lg'> Wacth </button>
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
        <div className='divshadow'>
          <div>
              {recentuploaded.length !== 0?<Slider data={recentuploaded} text="Recent Uploaded ..."/>:<EmptySlider text="Recent Uploaded ..."/>}
              {webseries.length !== 0?<Slider data={webseries} text="Web Series ..."/>:<EmptySlider text="Recent Uploaded ..."/>}
              {movies.length !== 0?<Slider data={movies} text="Movies ..."/>:<EmptySlider text="Recent Uploaded ..."/>}
              {action.length !== 0?<Slider data={action} text="Action ..."/>:<EmptySlider text="Recent Uploaded ..."/>}
              {comedy.length !== 0?<Slider data={comedy} text="Comedy ..."/>:<EmptySlider text="Recent Uploaded ..."/>}
              {crime.length !== 0?<Slider data={crime} text="Crime ..."/>:<EmptySlider text="Recent Uploaded ..."/>}
              {drame.length !== 0?<Slider data={drame} text="Drama ..."/>:<EmptySlider text="Recent Uploaded ..."/>}
              {horror.length !== 0?<Slider data={horror} text="Horror ..."/>:<EmptySlider text="Recent Uploaded ..."/>}
              {trailer.length !== 0?<Slider data={trailer} text="Trailer ..."/>:<EmptySlider text="Recent Uploaded ..."/>}
              {adventure.length !== 0?<Slider data={adventure} text="Adventure ..."/>:<EmptySlider text="Recent Uploaded ..."/>}
              {adult.length !== 0?<Slider data={adult} text="Adult ..."/>:<EmptySlider text="Recent Uploaded ..."/>}
          </div>
        </div>
      </div>
    </>
  )
}
