'use server'

import { createClient } from "@/utils/supabase/server"
import { NextRequest } from "next/server"

export async function GET(request:NextRequest) {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
            redirectTo: `http://localhost:3000/OAuth/callback`,
        },
    })
}
