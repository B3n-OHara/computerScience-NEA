'use server'

import { createClient } from "@/utils/supabase/actions"
import { cookies } from "next/headers"

const cookieStore = cookies()
const supabase = createClient(cookieStore)

export default async function CheckUserLoggedIn() {
    const { data: { user }, error } = await supabase.auth.getUser()

    if (!error) {
        return(true)
    }

    if (error) {
        return(false)
    }
}