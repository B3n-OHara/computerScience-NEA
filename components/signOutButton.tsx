import Link from "next/link"

//renders signout button
export function signOutButton() {
    return(
        //uses logout route handler to sign users out
        <li className="basis-1/7"><button className="btn btn-primary btn-sm"><Link href={'/dashboard/account/logout'}>Sign Out</Link></button></li>
    )
}