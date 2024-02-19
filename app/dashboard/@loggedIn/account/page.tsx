import { FetchUserPreferences } from "./actions"

export default async function AccountSettings() {
    FetchUserPreferences()
    return(
        <form className="flex flex-col items-center gap-y-8">

        </form>
    )
}