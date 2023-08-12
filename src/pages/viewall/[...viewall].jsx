import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {Make_A_Fetch_Request} from '@/components/request/makerequest';
import ViewAllRender from '@/components/viewall/viewall';
import EmptyViewAllRender from '@/components/viewall/emptyviewall';
export default function ViewAll(){
    const [pagedata,pagedatavalue] = useState([]);
    const router = useRouter();
    const { viewall } = router.query;
    const FetchData = async ()=>{
        const start = (+(viewall[1])-1)*49;
        const end = +(viewall[1])*49;
        switch(viewall[0]){
            case "HomePageRecentUpload":
                const fetchdat = await Make_A_Fetch_Request("MainCategory",['WebSeries', 'Movies'],start,end);
                pagedatavalue(fetchdat);
                break;
            case "HomePageWebSeriesData":
                const fetchdat1 = await Make_A_Fetch_Request("MainCategory",['WebSeries'],start,end);
                pagedatavalue(fetchdat1);
                break;
            case "HomePageRomanticData":
                const fetchdat2 = await Make_A_Fetch_Request("Geans",['Romantic'],start,end);
                pagedatavalue(fetchdat2);
                break;
            case "HomePageActionData":
                const fetchdat3 = await Make_A_Fetch_Request("Geans",['Action'],start,end);
                pagedatavalue(fetchdat3);
                break;
            case "HomePageComedyData":
                const fetchdat4 = await Make_A_Fetch_Request("Geans",['Comedy'],start,end);
                pagedatavalue(fetchdat4);
                break;
            case "HomePageCrimeData":
                const fetchdat5 = await Make_A_Fetch_Request("Geans",['Crime'],start,end);
                pagedatavalue(fetchdat5);
                break;
            case "HomePageDramaData":
                const fetchdat6 = await Make_A_Fetch_Request("Geans",['Drama'],start,end);
                pagedatavalue(fetchdat6);
                break;
            case "HomePageHorrorData":
                const fetchdat7 = await Make_A_Fetch_Request("Geans",['Horror'],start,end);
                pagedatavalue(fetchdat7);
                break;
            case "HomePageTraillerData":
                const fetchdat8 = await Make_A_Fetch_Request("Geans",['Thriller'],start,end);
                pagedatavalue(fetchdat8);
                break;
            case "HomePageAdventureData":
                const fetchdat9 = await Make_A_Fetch_Request("Geans",['Adventure'],start,end);
                pagedatavalue(fetchdat9);
                break;
            case "HomePageAdultData":
                const fetchdat10 = await Make_A_Fetch_Request("MainCategory",['Adult'],start,end);
                pagedatavalue(fetchdat10);
                break;
            case "movies":
                const fetchdat11 = await Make_A_Fetch_Request("MainCategory",['Movies'],start,end);
                pagedatavalue(fetchdat11);
                break;
            default:
                router.push("/");
            }        
    }
    useEffect(()=>{
        if(viewall !== undefined){
            FetchData();
        }
    },[viewall])
    return(
        <>
           <div className='mt-24'>
            <div className='m-5'>
                {pagedata.length !==0?<><ViewAllRender data={pagedata}/></>:<><EmptyViewAllRender/></>}
            </div>
           </div>
        </>
    );
}