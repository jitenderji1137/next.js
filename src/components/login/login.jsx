import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
export default function Loginpopup({button, isauth, url}) {
    const [email, setemail] = useState('');
    const [password,setpassword] = useState('');
    const [login,setlogin] = useState(true);
    const router = useRouter();
    const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_Api_Key,
        authDomain: process.env.NEXT_PUBLIC_Auth_Domain,
        projectId: process.env.NEXT_PUBLIC_Project_Id
    };
    firebase.initializeApp(firebaseConfig);
    function loginwithfirebase(){
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
    }
    function loginwithgithub(){
        const provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithRedirect(provider);
    }
    const handleTwitterLogin = () => {
        const provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth().signInWithRedirect(provider);
    };
    const UserLogin = async()=>{
        firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
            alert("Login Success! Enjoy Free Netflix");
            button(false);
        })
        .catch((error) => {
            alert("Unable to Login ,make sure you have created a account");
        });
    }
    const UserAccount = async()=>{
        firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
            alert("Successfully Create, Please login now ...");
            button(false);
        })
        .catch((error) => {
            alert("Unable to Create Account , Please try again or make sure user does't exists.");
        });
    }
    const Logout = async()=>{
        await firebase.auth().signOut();
        url("https://i.postimg.cc/7LjQBGFx/icon-5404125-1280.png");
        button(false);
        router.push("/");
    }
    return (
        <>
            <div className="backgroundtransprant h-screen top-0 fixed z-30 w-screen flex justify-center items-center">
                {!isauth?
                <div className="loginpage w-full max-w-lg backgroundtransprant h-96 rounded-md border border-fuchsia-950 border-solid">
                    <div className='flex items-center justify-between m-1.5'>
                        <h1 className='font-mono font-black'>{login?"Login to Free-Netflix":"Create Account on Free-Netflix"}</h1>
                        <div onClick={()=>{button(false)}} className='text-white w-7 h-7 flex justify-center items-center rounded-full bg-slate-800 hover:bg-red-600 cursor-pointer'>&#x2716;</div>
                    </div>
                    <div className='flex justify-center items-center text-4xl'>
                        <div className='cursor-pointer mx-4' onClick={()=>{loginwithfirebase()}}><FcGoogle/></div>
                        <div className='cursor-pointer mx-4' onClick={()=>{loginwithgithub()}}><BsGithub/></div>
                        <div className='cursor-pointer mx-4' onClick={()=>{handleTwitterLogin()}}><AiOutlineTwitter style={{color:"#00b0ff"}}/></div>
                    </div>
                    <div className='h-4/5'>
                        {login?
                        <form onSubmit={(e)=>{e.preventDefault();UserLogin();}} className="flex flex-col h-full justify-around font-mono">
                            <div>
                                <label htmlFor="">Email</label>
                                <input type="text" value={email} required onChange={(e) => setemail(e.target.value)} placeholder='Type youe email ...' className='placeholder-slate-400 focus:outline-none focus:border-red-950 focus:ring-red-600 block focus:ring-0 backgroundtransprant w-full rounded-lg border-red-950 border bg-red-300 border-solid px-10 bg-transparent text-sm' />
                            </div>
                            <div>
                                <label htmlFor="">Password</label>
                                <input type="password" value={password} required onChange={(e) => setpassword(e.target.value)} placeholder='Type youe password ...' className='placeholder-slate-400 focus:outline-none focus:border-red-950 focus:ring-red-600 block focus:ring-0 backgroundtransprant w-full rounded-lg border-red-950 border bg-red-300 border-solid px-10 bg-transparent text-sm' />
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='text-base text-blue-400 cursor-pointer' onClick={()=>{setlogin(false)}}>Create Account</p>
                                <button type="submit" className="text-lg bg-red-700 px-4 py-1 rounded-md">Login</button>
                            </div>
                        </form>:<form onSubmit={(e)=>{e.preventDefault();UserAccount();}} className="flex flex-col h-full justify-around font-mono">
                            <div>
                                <label htmlFor="">Email</label>
                                <input type="text" value={email} required onChange={(e) => setemail(e.target.value)} placeholder='Type youe email ...' className='placeholder-slate-400 focus:outline-none focus:border-red-950 focus:ring-red-600 block focus:ring-0 backgroundtransprant w-full rounded-lg border-red-950 border bg-red-300 border-solid px-10 bg-transparent text-sm' />
                            </div>
                            <div>
                                <label htmlFor="">Password</label>
                                <input type="password" value={password} required onChange={(e) => setpassword(e.target.value)} placeholder='Type youe password ...' className='placeholder-slate-400 focus:outline-none focus:border-red-950 focus:ring-red-600 block focus:ring-0 backgroundtransprant w-full rounded-lg border-red-950 border bg-red-300 border-solid px-10 bg-transparent text-sm' />
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='text-base text-blue-400 cursor-pointer' onClick={()=>{setlogin(true)}}>Login to Free-Netflix</p>
                                <button type="submit" className="text-lg bg-red-700 px-4 py-1 rounded-md">Create</button>
                            </div>
                        </form>}
                    </div>
                </div>:<div className="loginpage w-full max-w-lg backgroundtransprant h-96 rounded-md border border-fuchsia-950 border-solid">
                    <div className='flex items-center justify-between m-1.5'>
                        <h1 className='font-mono font-black'>Free-Netflix</h1>
                        <div onClick={()=>{button(false)}} className='text-white w-7 h-7 flex justify-center items-center rounded-full bg-slate-800 hover:bg-red-600 cursor-pointer'>&#x2716;</div>
                    </div>
                    <div className='flex flex-col h-full justify-around'>
                        <div className='flex items-center justify-around'>
                            <Image style={{width:"40px",height:"40px"}} src="/logo.png" width={100} height={100}/>
                        </div>
                        <div className='flex justify-center items-center text-2xl'>
                            <p>Do You Want to Logout</p>
                        </div>
                        <div className='flex justify-around items-center'>
                            <button className='bg-stone-950 px-4 py-1 rounded-md' onClick={()=>{button(false)}}>Cancel</button>
                            <button className='bg-red-600 px-4 py-1 rounded-md' onClick={()=>{Logout()}}>Logout</button>
                        </div>
                        <div></div>
                    </div>
                </div>}
            </div>
        </>
    );
  }