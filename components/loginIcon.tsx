import Link from "next/link"
import Image from "next/image"
import profileIcon from '@/public/healthicons--ui-user-profile.svg'

export function LoginIcon() {
    return(
        <Link href={"/login"}>
            <Image 
                src={profileIcon}
                priority={true}
                width={64}
                height={64}
                alt='Profile Icon'
            />
        </Link>
    )
}