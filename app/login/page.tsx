import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient('https://xltnbmxlfecxgilzxpdl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsdG5ibXhsZmVjeGdpbHp4cGRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk5NTQ3MzUsImV4cCI6MjAwNTUzMDczNX0.HLcSqhV99SW548RcJOlbJShcgIbOuD2jR6j_jTSCIpM')

const App = () => (
  <Auth
    supabaseClient={supabase}
    appearance={{ theme: ThemeSupa }}
    providers={['google', 'github']}
    theme="dark"
  />
)
