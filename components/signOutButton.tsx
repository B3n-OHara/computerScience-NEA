import Link from "next/link"

export function signOutButton() {
    return(
        <li className="basis-1/7"><button className="btn btn-primary btn-sm"><Link href={'/dashboard/account/logout'}>Sign Out</Link></button></li>
    )
}