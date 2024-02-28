'use server'

import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { NextRequest } from "next/server"

//route handler for signing out users
export async function GET(request: NextRequest) {
    //create supabase server client
    const supabase = await createClient()

    //request user sign out from supabase auth
    const { error } = await supabase.auth.signOut()
    
    //if error
    if (error) {
        //redirect users to an error page
        redirect('/error')
    }

    //due to the sign out, user session is now invalid and middleware can't handle immediately, so the entire path needs to be revalidated (essentially wiped clean)
    revalidatePath('/', 'layout')
    //redirect to the home page
    redirect('/')
}