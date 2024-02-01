'use server'

import { cookies } from "next/headers"
import { createClient } from "@/utils/supabase/actions"


export async function RequestPwdReset(formData: FormData) {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    
    const email = formData.get('email') as string

    await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'http://localhost:3000/auth/reset-password'
    })
}

export async function UpdateUserPwd(formData: FormData) {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const password = formData.get('pwd') as string

    const { data, error } = await supabase.auth.updateUser({
        password: password
    })

    if (data) {
        alert("Password Updated Successfully!")
    }

    if (error) {
        alert("There Was An Error Updating Your Password")
    }
}