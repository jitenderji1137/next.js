import { createClient } from "@supabase/supabase-js";
export const Make_A_Fetch_Request = async(part1,part2,start,end)=>{
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);
    let ArrData = await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).in(part1, part2).range(start,end);
    if(ArrData.data){
        return ArrData.data;
    }else{
        alert("Something went wrong");
    }
}
export const Make_A_Search_Request = async(part2,start,end)=>{
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);
    let ArrData = await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).ilike('Title', part2).range(start,end);
    if(ArrData.data){
        return ArrData.data;
    }else{
        alert("Something went wrong");
    }
}