'use server'

import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

export async function fetchUser() {
    const cookieStore = cookies()
    const supabase = createClient()

    const { data: { user } } = await supabase.auth.getUser()

    const user_id = user?.id

    return(
        user_id
    )
}