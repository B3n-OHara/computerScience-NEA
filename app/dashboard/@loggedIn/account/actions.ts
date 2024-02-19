'use server'

import { cookies } from "next/headers"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export async function FetchUserPreferences() {
    const cookieStore = cookies()
    const supabase = await createClient(cookieStore)

    const { data: { user } } = await supabase.auth.getUser()
    const userID = user?.id

    const { data, error } = await supabase.from('user_preference').select().eq('user_id', userID)

    if (data) {
        const level = data
        console.log(level)
    }

    if (error) {
        redirect('./error')
    }
}