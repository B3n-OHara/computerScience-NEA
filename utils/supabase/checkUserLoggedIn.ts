'use server'

import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

//check if there is a user currently logged in
export default async function CheckUserLoggedIn() {
    //get cookies
    const cookieStore = cookies()
    //create supabase server client
    const supabase = await createClient()
    //fetch user
    const { data: { user } } = await supabase.auth.getUser()

    //if there is no user
    if (user == null) {
        return(false)
    }

    //if there is a user
    else {
        return(true)
    }
}