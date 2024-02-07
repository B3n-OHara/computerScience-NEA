import { login } from '../actions'
import { SignInWithGithub, SignInWithGoogle } from '@/utils/supabase/OAuthSignIn'
import Link from 'next/link'
import Image from 'next/image'
import githubIcon from '@/public/mdi--github.svg'
import googleIcon from '@/public/devicon--google.svg'

export default function LoginPage() {
    return (
        <div>
            <form className='absolute w-1/3 h-[800px] left-1/3 top-[140px] bg-01dp shadow-[0px_16px_6px_rgba(244, 144, 29, 0.03)]'>
                <div className='flex flex-col'>
                    <div className='flex flex-col'>
                        <label htmlFor="email">Email:</label>
                        <input id="email" name="email" type="email" placeholder='name@email.com' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="password">Password:</label>
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