import { login } from '../actions'
import { SignInWithGithub, SignInWithGoogle } from '@/utils/supabase/OAuthSignIn'
import Link from 'next/link'
import Image from 'next/image'
import githubIcon from '@/public/mdi--github.svg'
import googleIcon from '@/public/devicon--google.svg'

export default function LoginPage() {
    return (
        <div>
            <form className='absolute w-1/3 h-[700px] left-1/3 top-[140px] bg-01dp shadow-[0px_16px_6px_rgba(244,144,29,0.03)] shadow-[0px_9px_5px_rgba(244,144,29,0.1)] shadow-[0px_4px_4px_rgba(244,144,29,0.17)] shadow-[0px_1px_2px_rgba(244,144,29,0.2)] rounded-[20px]'>
                <div className='flex flex-col'>
                    <div className='flex flex-col'>
                        <div className='label'>
                            <span className='label-text'>Email:</span>
                        </div>
                        <input id="email" name="email" type="email" placeholder='name@email.com' className='input input-bordered input-lg '/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="password" className='label-text'>Password:</label>
                        <input id="password" name="password" type="password" placeholder='Password'/>
                    </div>
                </div>

                <div>
                    <button className='btn btn-wide' formAction={login}>Sign In</button>
                </div>

                <div>
                    <Link href="../(recoverAcc)">Forgotten Your Password?</Link>
                </div>

                <div className='flex flex-row'>
                    <div>
                        <button className='btn btn-lg' formAction={SignInWithGithub}>
                            Login With Github
                            <Image src={githubIcon} width={60} height={60} alt='Github Icon'/>
                        </button>
                    </div>
                    <div>
                        <button className='btn btn-lg' formAction={SignInWithGoogle}>
                            Login With Google
                            <Image src={googleIcon} width={60} height={60} alt='Google Icon'/>
                        </button>
                    </div>
                </div>
                
                <div>
                    <p>Or...</p>
                </div>

                <div>
                    <Link href="../(signup)">Sign Up</Link>
                </div>
            </form>
        </div>
    )
}

//! NEED TO STYLE REST - REFER TO DAISY UI DOCS + TAILWIND DOCS