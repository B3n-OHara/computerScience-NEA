'use server'

import { RequestPwdReset } from "@/utils/supabase/pwdReset"

//render account recovery page
export default async function RecoverAcc() {
    //return form allowing user to input their email and request a password reset for the corresponding account
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" name="email" type="email" />
                </div>
                <div>
                    <button formAction={RequestPwdReset}>Send Reset Link</button>
                </div>
            </form>
        </div>
    )
}