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

    const { error } = await supabase
        .from('ContactFormMessages')
        .insert({ userID: (user), message_type: (messageType), message: (message) })

    if (error) {
        redirect('./error')
    }

    revalidatePath('/', 'layout')
    redirect('/')

}