import { Key } from "react";
import { createClient } from "./client"
import { redirect } from "next/navigation";

export async function FetchMetadata(user_id: string) {
    const supabase = createClient()

    const { data: { user }, error } = await supabase.auth.admin.getUserById(user_id)

        if (error) {
            redirect('/error')
        }

        if (user) {
            let metadata = user.user_metadata
            let user_name = metadata.name
            return user_name
        }
}