'use client'

import { signup } from '../actions'
import Link from 'next/link'
import Image from 'next/image'
import githubIcon from '@/public/mdi--github.svg'
import googleIcon from '@/public/devicon--google.svg'
import { createClient } from '@/utils/supabase/client'

export default function SignUpPage() {
    const supabase = createClient()
    
    const handleOAuthGithub = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: `https://containeriseit.dev/OAuth/callback`,
            },
        })
    }
    
    const handleOAuthGoogle = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `https://containeriseit.dev/OAuth/callback`,
            },
        })
    }

    return (
        <div>
            <div className='hero min-h-screen bg-surface'>
                <div className='hero-content flex flex-col lg:flex-row-reverse h-3/4'>
                    <div className='text-center lg:text-left'>
                        <h1 className='text-5xl font-bold'>Sign Up!</h1>
                        <p className='py-6'>If signing up via email, ensure to check your inbox for a confirmation email. If signing up via a social provider, you don't need to worry! If you are using a social provider, when signing into your kasm workspace, use the email linked to that provider, and the default password that will be displayed. Once you've signed in, you'll be prompted to change your password</p>
                    </div>
                    
                    <form className='font-text flex flex-col justify-evenly items-center w-full min-w-max flex-initial h-full top-[140px] bg-01dp shadow-[[0px_16px_6px_rgba(244,144,29,0.03)], [0px_9px_5px_rgba(244,144,29,0.1)], [0px_4px_4px_rgba(244,144,29,0.17)], [0px_1px_2px_rgba(244,144,29,0.2)]] rounded-[20px]'>
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
                            <button className='btn btn-lg shrink w-[374px]' formAction={signup}>Sign Up</button>
                        </div>

                        <div>
                            <p>Prefer To Use A Social Provider?</p>
                        </div>

                        <div className='flex flex-initial gap-x-3 mx-4'>
                            <div>
                                <button className='btn btn-lg' onClick={handleOAuthGithub}>
                                    Start With Github
                                    <Image src={githubIcon} width={60} height={60} alt='Github Icon'/>
                                </button>
                            </div>
                            
                            <div>
                                <button className='btn btn-lg' onClick={handleOAuthGoogle}>
                                    Start With Google
                                    <Image src={googleIcon} width={60} height={60} alt='Google Icon'/>
                                </button>
                            </div>
                        </div>
                        
                        <div>
                            <p>Already Have An Account?</p>
                        </div>

                        <div>
                            <Link href="./login" className='text-primary'>Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}