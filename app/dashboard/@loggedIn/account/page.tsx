import Link from "next/link"
import { RenderPreferences } from "./renderAccountPreferences"
import { fetchUser } from "@/utils/supabase/fetchuser"

//render account settings page
export default async function AccountSettings() {
    //use the fetchUser utility to fetch the user's id
    const user_id = await fetchUser()

    //render the user's current preferences in a form alongside account functions
    return(
        <div className="flex flex-row">
            <div className="w-1/2">
                <RenderPreferences>
                    {user_id}
                </RenderPreferences>
            </div>
            <div className=" w-1/2 flex flex-col font-text gap-y-8 my-8">
                <div>
                    <p className="label label-text">Want to Change Your Password?</p>
                    <button className="btn btn-lg btn-primary"><Link href={'/recoverAcc'}>Reset Password</Link></button>
                </div>
                <div className="divider divider-error w-5/6">
                    <p className="label label-text text-error">DANGER ZONE</p>
                </div>
                <div>
                    <p className="label label-text">Want to Delete Your Account?</p>
                    <button className="btn btn-lg btn-error text-black">Delete Account</button>
                </div>
            </div>
        </div>
    )
}