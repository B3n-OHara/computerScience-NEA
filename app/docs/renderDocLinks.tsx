'use client'

import { createClient } from "@/utils/supabase/client"
import Link from "next/link"
import React, { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react"

//render link for each doc dynamically based on data passed to function
export function RenderLinks({
    children,
} : {
    children: React.ReactNode
}) {

    const supabase = createClient()

    //useState() dynamically sets consts
    const [fetchError, setFetchError] = useState<any>(null)
    const [dataToRender, setDataToRender] = useState<any>(null)

    //fires function once at render
    useEffect(() => {
        //async function to fetch each doc from the relevant category - set by children
        const fetchData = async () => {
            //fetch data
            const { data, error } = await supabase
                .from('docs')
                .select()
                .eq('category', children)

                //if error when fetching
                if (error) {
                    //error so set error code
                    setFetchError('Unable to Fetch Documentation')
                    //no data so set null
                    setDataToRender(null)
                    console.log(error)
                }

                //fetch successful
                if (data) {
                    //set data to render from returned data from fetch
                    setDataToRender(data)
                    //no error so set null
                    setFetchError(null)
                }

        }

        //call funtion
        fetchData()
    }, [supabase, children])

    //conditional rendering of error message or link to doc
    //mapping each attribute to each doc
    return(
        <ul>
            {fetchError && (<p>{fetchError}</p>)}
            {dataToRender && (
                <li className="flex flex-col">
                    {dataToRender.map((dataToRender: {id: Key | null | undefined; created_at: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; category: string | null | undefined; title: string | null | undefined; content: string | null | undefined; }) => (
                        <Link key={dataToRender.id} href={`/docs/${dataToRender.category}/${dataToRender.title}`}>{dataToRender.title}</Link>
                    ))}
                </li>
            )}
        </ul>
    )

}
