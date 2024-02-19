import { signup } from '../actions'
import { SignInWithGithub, SignInWithGoogle } from '@/utils/supabase/OAuthSignIn'
import Link from 'next/link'
import Image from 'next/image'
import githubIcon from '@/public/mdi--github.svg'
import googleIcon from '@/public/devicon--google.svg'

export default function SignPage() {
    return (
        <div>
            <form className='font-text flex flex-col justify-evenly items-center absolute w-1/3 min-w-64 flex-initial h-[640px] left-1/3 top-[140px] bg-01dp shadow-[[0px_16px_6px_rgba(244,144,29,0.03)], [0px_9px_5px_rgba(244,144,29,0.1)], [0px_4px_4px_rgba(244,144,29,0.17)], [0px_1px_2px_rgba(244,144,29,0.2)]] rounded-[20px]'>
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

                <div className='flex flex-initial gap-x-3'>
                    <div>
                        <button className='btn btn-lg' onClick={SignInWithGithub}>
                            Sign Up With Github
                            <Image src={githubIcon} width={60} height={60} alt='Github Icon'/>
                        </button>
                    </div>
                    
                    <div>
                        <button className='btn btn-lg' onClick={SignInWithGoogle}>
                            Sign Up With Google
                            <Image src={googleIcon} width={60} height={60} alt='Google Icon'/>
                        </button>
                    </div>
                </div>
                
                <div>
                    <p>Already Have An Account?</p>
                </div>

                <div>
                    <Link href="./login">Login</Link>
                </div>
            </form>
        </div>
    )
}