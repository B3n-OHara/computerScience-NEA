import { RenderPreferences } from "./renderAccountPreferences"
import { fetchUser } from "@/utils/supabase/fetchuser"

export default async function AccountSettings() {
    const user_id = await fetchUser()

    return(
        <RenderPreferences>
            {user_id}
        </RenderPreferences>
    )
}