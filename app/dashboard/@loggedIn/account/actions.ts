'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

//function for submitting user preferences to database for later use
//using data from calling form as argument
export async function SubmitPreferences(formData: FormData) {
    //get cookies
    const cookieStore = cookies()
    //create supabase server client
    const supabase = await createClient()

    //get each attribute from form data
    const level = formData.get('level') as string
    const use_case = formData.get('use_case') as string
    const interest1 = formData.get('interest1') as string
    const interest2 = formData.get('interest2') as string
    const interest3 = formData.get('interest3') as string

    //fetch user details using current session
    const { data: { user } } = await supabase.auth.getUser()
    //specifying user id
    const userID = user?.id

    //upsert new data into database for the user
    const { data, error } = await supabase
        .from('user_preferences')
        .upsert({ user_id: (userID), level: (level), use_case: (use_case), interest1: (interest1), interest2: (interest2), interest3: (interest3)})
        .select()
    
    //if error when upserting
    if (error) {
        //redirect users to an error page
        redirect('/error')
    }

    //force a clean slate state for the current page in order to now display updated data
    revalidatePath('/dashboard/account')
    //redirect users to the updated page so new data can render
    redirect('/dashboard/account')
}