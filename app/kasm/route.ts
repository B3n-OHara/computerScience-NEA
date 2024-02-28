import { createClient } from "@/utils/supabase/server"

//route handler to create kasm user
export async function POST(request: Request) {
    //kasm API environment variables
    const API_KEY = process.env.KASM_API_KEY
    const API_KEY_SECRET = process.env.KASM_API_KEY_SECRET
    
    //get params from request url
    const { searchParams, origin } = new URL(request.url)
    const id = searchParams.get('id')

    //create supabase server client
    const supabase = createClient()
    //fetch certain user using their id
    const { data: { user }, error } = await supabase.auth.admin.getUserById(id)
    //metadata
    let metadata = user?.user_metadata

    const username = user?.email

    //if the id fetching was a success
    if (id) {
        //send kasm API POST request to create a new user with specified JSON
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