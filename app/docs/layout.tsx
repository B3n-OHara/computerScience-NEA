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
                    <ul className="menu p-4 min-h-full bg-24dp text-base-content items-center">
                        <RenderCategories />
                    </ul>
                </div>
            </div>
        </section>
    )
}