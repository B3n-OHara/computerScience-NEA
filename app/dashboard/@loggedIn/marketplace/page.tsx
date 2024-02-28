'use client'

import { createClient } from "@/utils/supabase/client"
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react"

//function to dynamically render each available container from supabase database
export default function Marketplace() {
    //create supabase client client
    const supabase = createClient()

    //useState() dynamically sets values
    const [fetchError, setFetchError] = useState<any>(null)
    const [containers, setContainers] = useState<any>(null)

    //useEffect() fires function once at render
    useEffect(() => {
        //async function to fetch every container in the table
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('containers')
                .select()

            //error when fetching
            if (error) {
                //error so set error message
                setFetchError('Unable to Fetch Containers')
                //no data so set containers null
                setContainers(null)
                console.log(error)
            }

            //fetch successful
            if (data) {
                //data returned so set containers array
                setContainers(data)
                //no error so set error message null
                setFetchError(null)
            }
        }

        //calls function
        fetchData()
    }, [supabase])

    //conditionally render error message or containers
    //map attributes of each container to unique object and render them all in a grid
    return(
        <div>
            {fetchError && (<p>{fetchError}</p>)}
            {containers && (
                <div className="grid grid-cols-4 gap-4 m-4">
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