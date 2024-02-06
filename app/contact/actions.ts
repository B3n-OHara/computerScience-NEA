'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/actions'

export async function SubmitContactForm(formData:FormData) {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const data = {
        messageType: formData.get('messageType') as string,
        message: formData.get('message') as string,
    }

    
}