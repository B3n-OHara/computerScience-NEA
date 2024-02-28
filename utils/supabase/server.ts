import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createClient() {
  const cookieStore = cookies()
  
  //creates a client stored on both the browser and server using cookies
  return createServerClient(
    //processes NEXT_PUBLIC_SUPABASE_URL (the URL of the supabase project & stored on the server for protection) securely and uses as an argument
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    //processes NEXT_PUBLIC_SUPABASE_ANON_KEY (the Anonymous API Key for supabase & stored on the server for protection) securely and uses as an argument
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      //provides different methods to use on cookies object
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch (error) {
            // The `delete` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}