'use server'

import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

export default async function CheckUserLoggedIn() {
    const cookieStore = cookies()
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (user == null) {
        return(false)
    }

    else {
        return(true)
    }
}