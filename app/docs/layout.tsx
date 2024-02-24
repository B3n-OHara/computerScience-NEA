import Link from "next/link"
import { RenderCategories } from "./renderDocCategories"
import React from "react"

export default function layout({
    children,
}: {
    children: React.ReactNode
}) {
    return(
        <section>
            <div className="drawer drawer-open">
                <input id="drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {children}
                </div>

                <div className="drawer-side font-text">
                    <label htmlFor="drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 min-h-full bg-24dp text-base-content items-start gap-y-6">
                        <li>
                            <Link href={'/docs'}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                Docs Home
                            </Link>
                        </li>
                        <RenderCategories />
                    </ul>
                </div>
            </div>  
        </section>
    )
}