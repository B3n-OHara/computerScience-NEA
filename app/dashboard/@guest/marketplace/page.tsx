'use client'

import { createClient } from "@/utils/supabase/client"
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react"

export default function Marketplace() {
    const supabase = createClient()

    const [fetchError, setFetchError] = useState<any>(null)
    const [containers, setContainers] = useState<any>(null)

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('containers')
                .select()

            if (error) {
                setFetchError('Unable to Fetch User preferences')
                setContainers(null)
                console.log(error)
            }
            if (data) {
                setContainers(data)
                setFetchError(null)
            }
        }

        fetchData()
    }, [supabase])

    return(
        <div>
            {fetchError && (<p>{fetchError}</p>)}
            {containers && (
                <div className="grid grid-cols-4 gap-4">
                    {containers.map((containers: { container_id: Key | null | undefined; icon_url: string | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; base_os: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined }) => (
                        <div key={containers.container_id} className="card w-96 bg-08dp shadow-xl">
                            <figure><img src={containers.icon_url} alt="icon" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {containers.name}
                                </h2>
                                <p>{containers.description}</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">{containers.base_os}</div>
                                </div>
                            </div>
                        </div>                
                    ))}
                </div>
            )}
        </div>
    )
}