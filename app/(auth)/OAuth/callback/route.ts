import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { type CookieOptions, createServerClient } from '@supabase/ssr'

//root handler for callback url when a user signs in/ signs up with OAuth
export async function GET(request: Request) {
  //get params sent along with request and origin url from the request url
  const { searchParams, origin } = new URL(request.url)
  //get OAuth code from the params
  const code = searchParams.get('code')
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get('next') ?? '/dashboard'

  //if successful
  if (code) {
    //create a unique supabase server client specifically setup for OAuth
    //follows similar structure to the server.ts utility
    const cookieStore = cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set({ name, value, ...options })
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.delete({ name, ...options })
          },
        },
      }
    )
    //exchange the returned auth code for a new user session
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    //if successful
    if (!error) {
      //return server response to redirect user to the next path
      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/error`)
}