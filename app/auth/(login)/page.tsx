import { login } from '../actions'
import { SignInWithGithub, SignInWithGoogle } from '@/utils/supabase/OAuthSignIn'
import Link from 'next/link'
import Image from 'next/image'
import githubIcon from '@/public/mdi--github.svg'
import googleIcon from '@/public/devicon--google.svg'

export default function LoginPage() {
    return (
        <div>
            <form>
                <div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input id="email" name="email" type="email" placeholder='name@email.com' />
                    </div>
                    <div>
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

                <div className='socialProviders-container'>
                    <div className='button'>
                        <button className='btn' formAction={SignInWithGithub}>
                            Login With Github
                            <Image src={githubIcon} width={60} height={60} alt='Github Icon'/>
                        </button>
                    </div>
                    <div>
                        <button className='btn' formAction={SignInWithGoogle}>
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