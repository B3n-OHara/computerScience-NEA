import { createClient } from "@/utils/supabase/client"
import { redirect } from "next/navigation"

export async function FetchContainers() {
    const supabase = createClient()

    const { data, error } = await supabase
        .from('containers')
        .select()

    if (error) {
        redirect('/')
    }

    else {
        return data
    }
}