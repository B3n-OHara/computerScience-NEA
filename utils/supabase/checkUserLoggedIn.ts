'use server'

import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

const cookieStore = cookies()
const supabase = createClient(cookieStore)

export default async function CheckUserLoggedIn() {
    const { data: { user } } = await supabase.auth.getUser()

    if (user == null) {
        return(false)
    }

    else {
        return(true)
    }
}