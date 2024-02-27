import { createClient } from "@/utils/supabase/client"

export async function POST(request: Request) {
    const API_KEY = process.env.KASM_API_KEY
    const API_KEY_SECRET = process.env.KASM_API_KEY_SECRET
    
    const { searchParams, origin } = new URL(request.url)
    const id = searchParams.get('id')

    const supabase = createClient()
    const { data: { user }, error } = await supabase.auth.admin.getUserById(id)
    let metadata = user?.user_metadata

    const username = user?.email

    if (id) {
        const response = await fetch('https://kasm.containeriseit.dev/api/public/create_user', {
            method: "POST",
            body: JSON.stringify(
                {
                    "api_key": API_KEY,
                    "api_key_secret": API_KEY_SECRET,
                    "target_user": {
                        "username": username,
                        "password": "newKasmUser123!",
                        "force_password_reset_on_login": true,
                        "locked": false,
                        "disabled": false,
                    }
                }
            )
        })
    }
}