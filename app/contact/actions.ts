'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/actions'

export async function SubmitContactForm(formData:FormData) {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const messageType = formData.get('messageType') as string
    const message = formData.get('message') as string

    const { data: { user } } = await supabase.auth.getUser()
    const userID = user?.id

    if (user == null) {
        const { error } = await supabase
            .from('ContactFormMessages')
            .insert({ userID: ('Guest'), message_type: (messageType), message: (message) })
    }

    else {
        const { error } = await supabase
            .from('ContactFormMessages')
            .insert({ userID: (userID), message_type: (messageType), message: (message) })

        if (error) {
            redirect('./error')
        }    
    }

    revalidatePath('/', 'layout')
    redirect('/')

}