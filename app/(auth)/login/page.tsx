'use client'

import { login } from '../actions'
import Link from 'next/link'
import Image from 'next/image'
import githubIcon from '@/public/mdi--github.svg'
import googleIcon from '@/public/devicon--google.svg'
import { createClient } from '@/utils/supabase/client'

//render the login page
export default function LoginPage() {
    //create supabase client client
    const supabase = createClient()
    
    //async function to handle login via GitHub
    const handleOAuthGithub = async () => {
        //sign in the user with OAuth method
        //direct user to GitHub's auth flow
        await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: `https://containeriseit.dev/OAuth/callback`,
            },
        })
    }
    
    //async function to handle login via Google
    const handleOAuthGoogle = async () => {
        //sign in the user with OAuth method
        //direct user to Google's auth flow
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `https://containeriseit.dev/OAuth/callback`,
            },
        })
    }

    //render login form
    //call relevant login functions when necessary
    return (
        <div>
            <form className='font-text flex flex-col justify-evenly items-center absolute w-1/3 min-w-64 flex-initial h-3/4 left-1/3 top-[140px] bg-01dp shadow-[[0px_16px_6px_rgba(244,144,29,0.03)], [0px_9px_5px_rgba(244,144,29,0.1)], [0px_4px_4px_rgba(244,144,29,0.17)], [0px_1px_2px_rgba(244,144,29,0.2)]] rounded-[20px]'>
                <div className='flex flex-col flex-initial gap-y-5 items-center'>
                    <div className='flex flex-col'>
                        <div className='label'>
                            <span className='label-text'>Email:</span>
                        </div>
                        <input id="email" name="email" type="email" placeholder='name@email.com' className='input input-bordered input-lg left-[40px] top-[60px] flex-initial w-[520px]'/>
                    </div>
                    <div className='flex flex-col'>
                        <div className='label'>
                            <span className='label-text'>Passsword:</span>
                        </div>
                        <input id="password" name="password" type="password" placeholder='Password'className='input input-bordered input-lg left-[40px] top-[60px] flex-initial w-[520px]'/>
                    </div>
                </div>

                <div className='flex'>
                    <button className='btn btn-lg shrink w-[374px]' formAction={login}>Sign In</button>
                </div>

                <div>
                    <Link href="../recoverAcc">Forgotten Your Password?</Link>
                </div>

                <div className='flex flex-initial gap-x-3'>
                    <div>
                        <button className='btn btn-lg' onClick={handleOAuthGithub}>
                            Login With Github
                            <Image src={githubIcon} width={60} height={60} alt='Github Icon'/>
                        </button>
                    </div>
                    
                    <div>
                        <button className='btn btn-lg' onClick={handleOAuthGoogle}>
                            Login With Google
                            <Image src={googleIcon} width={60} height={60} alt='Google Icon'/>
                        </button>
                    </div>
                </div>
                
                <div>
                    <p>Or...</p>
                </div>

                <div>
                    <Link href="./signup" className='text-primary'>Sign Up</Link>
                </div>
            </form>
        </div>
    )
}