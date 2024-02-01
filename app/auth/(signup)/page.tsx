import { signup } from '../actions'
import { SignInWithGithub, SignInWithGoogle } from '@/utils/supabase/OAuthSignIn'
import Link from 'next/link'
import Image from 'next/image'
import githubIcon from '@/public/mdi--github.svg'
import googleIcon from '@/public/devicon--google.svg'

export default function SignPage() {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" name="email" type="email" />
                </div>
                
                <div>
                    <label htmlFor="password">Password:</label>
                    <input id="password" name="password" type="password" />
                </div>
                
                <div>
                    <button formAction={signup}>Sign Up</button>
                </div>

                <div>
                    <button formAction={SignInWithGithub}>Sign Up With Github</button>
                    <Image
                        src={githubIcon}
                        width={60}
                        height={60}
                        alt='Github Icon'
                    />
                </div>
                
                <div>
                    <button formAction={SignInWithGoogle}>Sign Up With Google</button>
                    <Image
                        src={googleIcon}
                        width={60}
                        height={60}
                        alt='Google Icon'
                    />
                </div>
                
                <div>
                    <p>Already Have An Account?</p>
                </div>
                
                <div>
                    <Link href="../(login)">Sign In</Link>
                </div>
            </form>
        </div>
    )
}