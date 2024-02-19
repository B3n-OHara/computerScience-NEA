'use server'

import { RequestPwdReset } from "@/utils/supabase/pwdReset"

export default async function RecoverAcc() {
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