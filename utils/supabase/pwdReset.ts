'use server'

//utilities for requesting password resets and carrying out the update

import { cookies } from "next/headers"
import { createClient } from "@/utils/supabase/server"

//request a password reset
export async function RequestPwdReset(formData: FormData) {
    const cookieStore = cookies()
    //create supabase server client
    const supabase = await createClient()

    //get email from recovery form
    const email = formData.get('email') as string

    //request supabase to send user a password reset link in an email and redirect them to the reset password page
    await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'http://localhost:3000/auth/reset-password'
    })
}

//update user's password
export async function UpdateUserPwd(formData: FormData) {
    const cookieStore = cookies()
    const supabase = await createClient()

    //get password from form
    const password = formData.get('pwd') as string

    //request supabase to upaate user's password
    const { data, error } = await supabase.auth.updateUser({
        password: password
    })

    //successful
    if (data) {
        alert("Password Updated Successfully!")
    }

    //unsuccessful
    if (error) {
        alert("There Was An Error Updating Your Password")
    }
}