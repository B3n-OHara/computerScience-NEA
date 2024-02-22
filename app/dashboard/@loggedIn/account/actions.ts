'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function SubmitPreferences(formData: FormData) {
    const cookieStore = cookies()
    const supabase = await createClient(cookieStore)

    const level = formData.get('level') as string
    const use_case = formData.get('use_case') as string
    const interest1 = formData.get('interest1') as string
    const interest2 = formData.get('interest2') as string
    const interest3 = formData.get('interest3') as string

    const { data: { user } } = await supabase.auth.getUser()
    const userID = user?.id

    const { data, error } = await supabase
        .from('user_preferences')
        .upsert({ user_id: (userID), level: (level), use_case: (use_case), interest1: (interest1), interest2: (interest2), interest3: (interest3)})
        .select()
    
    if (error) {
        redirect('/error')
    }

    
    revalidatePath('/dashboard/account')
    redirect('/dashboard/account')
}