'use server'

import { type EmailOtpType } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'

import { createClient } from '@/utils/supabase/server'

//route handler for callback after user clicks signup confirmation link in their email
export async function GET(request: NextRequest) {
  //get cookies
  const cookieStore = cookies()

  //search params is an object containing the values sent alongside the callback url 
  const { searchParams } = new URL(request.url)
  //get the user's hashed token from the url
  const token_hash = searchParams.get('token_hash')
  //get the user's email token type from the url
  const type = searchParams.get('type') as EmailOtpType | null
  //get the next path to redirect to from the url
  const next = searchParams.get('next') ?? '/'

  //clone the next path
  const redirectTo = request.nextUrl.clone()
  //set the redirection pathname
  redirectTo.pathname = next
  //delete the user's token hash from the redirect url for security reasons + to prevent errors
  redirectTo.searchParams.delete('token_hash')
  //delete type from redirect url
  redirectTo.searchParams.delete('type')

  //if there is attributes sent alongside the url
  if (token_hash && type) {
    const supabase = await createClient()

    //verify the user's email with their type and hashed token
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })
    //if successful
    if (!error) {
      //delete next attribute from the redirect url's params
      redirectTo.searchParams.delete('next')
      //return server response to redirect user to next path
      return NextResponse.redirect(redirectTo)
    }
  }

  // return the user to an error page with some instructions if there's an error
  redirectTo.pathname = '/error'
  return NextResponse.redirect(redirectTo)
}