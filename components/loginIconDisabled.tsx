import Image from "next/image"
import profileIcon from '@/public/healthicons--ui-user-profile.svg'

//renders an icon with the login link disabled
export function LoginIconDisabled() {
    return(
        <Image 
            src={profileIcon}
            priority={true}
            width={64}
            height={64}
            alt='Profile Icon'
        />
    )
}