'use server'

import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
    const supabase = await createClient()

    const { error } = await supabase.auth.signOut()
    
    if (error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}