'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

//async function to login user based on their submitted form data
export async function login(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  //get email and password from form data and create data object
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  //attempt supabase auth sign in with password - passing data object as argument
  const { error } = await supabase.auth.signInWithPassword(data)

  //if error when signing in
  if (error) {
    //redirect users to the error page
    redirect('./error')
  }

  //as user has signed in, clean slate is needed for middleware to set session details
  revalidatePath('/', 'layout')
  //redirect users to the homepage
  redirect('/')
}

//async function to handle user sign up based on their submitted data
export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  //get email and password from form data and create data object
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  //attempt supabase auth sign up - passsing data object as argument
  const { error } = await supabase.auth.signUp(data)

  //if error when signing in
  if (error) {
    //redirect users to error page
    redirect('/error')    
  }

  //as user has signed up, clean slate is needed for middleware to set session details
  revalidatePath('/', 'layout')
  //redirect users to homepage
  redirect('/')
}