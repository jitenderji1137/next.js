import { useState } from 'react';
import { useRouter } from 'next/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
export default function Loginpopup({button}) {
    const [email, setemail] = useState('');
    const [password,setpassword] = useState('');
    const [login,setlogin] = useState(true);
    const router = useRouter();
    const firebaseConfig = {
        apiKey: "AIzaSyBOwu1HGOc2LTTjalwwhwEkM16EdziUyEE",
        authDomain: "free-netflix-7e3cf.firebaseapp.com",
        projectId: "free-netflix-7e3cf"
    };
    firebase.initializeApp(firebaseConfig);
    const UserLogin = async()=>{
        firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
            alert("Login Success! Enjoy Free Netflix");
        })
        .catch((error) => {
            alert("Unable to Login ,make sure you have created a account");
        });
    }
    const UserAccount = async()=>{
        firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
            alert("Successfully Create, Please login now ...");
        })
        .catch((error) => {
            alert("Unable to Create Account , Please try again or make sure user does't exists.");
        });
    }
    return (
        <>
            <div className="backgroundtransprant h-screen top-0 fixed z-30 w-screen flex justify-center items-center">
                <div className="loginpage w-full max-w-lg backgroundtransprant h-96 rounded-md border border-fuchsia-950 border-solid">
                    <div className='flex items-center justify-between m-1.5'>
                        <h1 className='font-mono font-black'>{login?"Login to Free-Netflix":"Create Account on Free-Netflix"}</h1>
                        <div onClick={()=>{button(false)}} className='text-white w-7 h-7 flex justify-center items-center rounded-full bg-slate-800 hover:bg-red-600 cursor-pointer'>&#x2716;</div>
                    </div>
                    {/* <div className='logicon'>
                        <div className='ggicon' onClick={()=>{loginwithfirebase()}}><FcGoogle/></div>
                        <div className='ggicon' onClick={()=>{loginwithgithub()}}><BsGithub/></div>
                        <div className='ggicon' onClick={()=>{handleTwitterLogin()}}><AiOutlineTwitter style={{color:"#00b0ff"}}/></div>
                    </div> */}
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
                </div>
            </div>
        </>
    );
  }