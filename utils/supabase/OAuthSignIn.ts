'use server'

import { createClient } from "@/utils/supabase/actions"
import { cookies } from "next/headers"

const cookieStore = cookies()
const supabase = createClient(cookieStore)

export async function SignInWithGithub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
            redirectTo: `http://localhost:3000/auth/OAuth/callback`
        }
    })
}

export async function SignInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `http://localhost:3000/auth/OAuth/callback`
        }
    })
}