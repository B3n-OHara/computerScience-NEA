import Image from "next/image"
import profileIcon from '@/public/healthicons--ui-user-profile.svg'

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