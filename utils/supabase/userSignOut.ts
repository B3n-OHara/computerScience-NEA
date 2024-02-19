'use server'

import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

export default async function signOut() {
    const cookieStore = cookies()
    const supabase = await createClient(cookieStore)

    const { error } = await supabase.auth.signOut()
    
    if (!error) {
        redirect('/')
    }

    else {
        redirect('/')
    }
}