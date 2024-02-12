import Link from "next/link"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return(
        <section>
            <div className="drawer drawer-open">
                <input id="drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {children}
                </div>

                <div className="drawer-side">
                    <label htmlFor="drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 min-h-full bg-24dp text-base-content items-center">
                        <li className="basis-1/5"><Link href={"/dashboard/workspace"}>Workspace</Link><div className="divider divider-primary"></div></li>
                        <li className="basis-1/5"><Link href={"/dashboard/userContainers"}>Your Containers</Link><div className="divider divider-primary"></div></li>
                        <li className="basis-1/5"><Link href={"/dashboard/demos"}>Demos</Link><div className="divider divider-primary"></div></li>
                        <li className="basis-1/5"><Link href={"/dashboard/marketplace"}>Container Marketplace</Link><div className="divider divider-primary"></div></li>
                        <li className="basis-1/5"><Link href={"/docs"}>How-To Guides</Link><div className="divider divider-primary"></div></li>
                    </ul>
                </div>
            </div>
            
        </section>
    )
}