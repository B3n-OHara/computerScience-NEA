'use server'

import { UpdateUserPwd } from "@/utils/supabase/pwdReset"

export default async function ResetPassword() {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="password">New Password:</label>
                    <input id="pwd" name="password" type="password" />
                </div>
                <div>
                    <button formAction={UpdateUserPwd}>Update Password</button>
                </div>
            </form>
        </div>
    )
}
