'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

//async funtion to submit the data from the contact page
//taking in the form data as an argument
export async function SubmitContactForm(formData:FormData) {
    const cookieStore = cookies()
    //create supabase server client
    const supabase = await createClient()

    //get attributes from form data
    const messageType = formData.get('contactReason') as string
    const message = formData.get('message') as string

    //fetch user from current session
    const { data: { user } } = await supabase.auth.getUser()
    //get user id attribute from the user object
    const userID = user?.id

    //if the user isn't logged in
    if (user == null) {
        //insert their reason for contacting and their message, setting guest to true and leaving out user's id
        const { error } = await supabase
            .from('contact_form_messages')
            .insert({ message_type: (messageType), message: (message), guest: (true) })
        
            //if error when inserting
        if (error) {
            //redirect users to error page
            redirect('./error')
        }
    }

    //user is logged in
    else {
        //insert their reason for contacting, their message, set guest to false and include their user id
        const { error } = await supabase
            .from('contact_form_messages')
            .insert({ message_type: (messageType), message: (message), guest: (false), user_id: (userID) })

        //if error when inserting
        if (error) {
            //redirect user to error page
            redirect('/error')
        }    
    }

    //now contact form has been submitted, need to wipe clean slate in order to not display previously submitted data
    revalidatePath('/', 'layout')
    //redirect users to homepage
    redirect('/')

}