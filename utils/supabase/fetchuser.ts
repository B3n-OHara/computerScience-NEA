'use server'

import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

//fetches current user details from supabase
export async function fetchUser() {
    //collects cookies
    const cookieStore = cookies()
    //creates supabase server client
    const supabase = createClient()

    //calls supabase's auth schema and returns the current user's details
    const { data: { user } } = await supabase.auth.getUser()

    //filters the id field from the returned data via optional chaining
    const user_id = user?.id

    //returns the user id
    return(
        user_id
    )
}