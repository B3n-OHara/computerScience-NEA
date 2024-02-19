'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function SubmitContactForm(formData:FormData) {
    const cookieStore = cookies()
    const supabase = await createClient(cookieStore)

    const messageType = formData.get('messageType') as string
    const message = formData.get('message') as string

    const { data: { user } } = await supabase.auth.getUser()
    const userID = user?.id

    if (user == null) {
        const { error } = await supabase
            .from('contact_form_messages')
            .insert({ message_type: (messageType), message: (message), guest: (true) })
    }

    else {
        const { error } = await supabase
            .from('contact_form_messages')
            .insert({ message_type: (messageType), message: (message), guest: (false), user_id: (userID) })

        if (error) {
            redirect('./error')
        }    
    }

    revalidatePath('/', 'layout')
    redirect('/')

}