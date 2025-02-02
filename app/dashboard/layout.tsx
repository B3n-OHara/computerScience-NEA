import Link from "next/link"
import CheckUserLoggedIn from "@/utils/supabase/checkUserLoggedIn"
import React from "react"
import { signOutButton } from "@/components/signOutButton"

//layout function to render dashboard navigation menu
//takes in both guest and logged in parallel routes
export default async function DashboardLayout({
    guest,
    loggedIn,
}: {
    guest: React.ReactNode
    loggedIn: React.ReactNode
}) {
    //checks if a user is logged in and sets according boolean
    const state = await CheckUserLoggedIn()

    //conditionally render either guest or logged in views
    //pages open inside of menu layout
    //render navigation links as a side menu
    return(
        <section>
            <div className="drawer drawer-open">
                <input id="drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {state ? loggedIn : guest}
                </div>

                <div className="drawer-side font-text">
                    <label htmlFor="drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-62 min-h-full bg-24dp text-base-content items-center">
                        <li className="basis-1/7"><Link href={"/dashboard/workspace"}>Workspace</Link><div className="divider divider-primary"></div></li>
                        <li className="basis-1/7"><Link href={"/dashboard/userContainers"}>Your Containers</Link><div className="divider divider-primary"></div></li>
                        <li className="basis-1/7"><Link href={"/dashboard/demos"}>Demos</Link><div className="divider divider-primary"></div></li>
                        <li className="basis-1/7"><Link href={"/dashboard/marketplace"}>Container Marketplace</Link><div className="divider divider-primary"></div></li>
                        <li className="basis-1/7"><Link href={"/docs"}>How-To Guides</Link><div className="divider divider-primary"></div></li>
                        <li className="basis-1/7"><Link href={"/dashboard/account"}>Account Settings</Link><div className="divider divider-primary"></div></li>
                        {state ? signOutButton() : null}
                    </ul>
                </div>
            </div>
        </section>
    )
}