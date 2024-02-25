'use client'

import { createClient } from "@/utils/supabase/client"
import Link from "next/link"
import React, { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react"

export function RenderLinks({
    children,
} : {
    children: React.ReactNode
}) {

    const supabase = createClient()

    const [fetchError, setFetchError] = useState<any>(null)
    const [dataToRender, setDataToRender] = useState<any>(null)

    useEffect(() => {
        const fetchData = async () => {
            
            const { data, error } = await supabase
                .from('docs')
                .select()
                .eq('category', children)

                if (error) {
                    setFetchError('Unable to Fetch Documentation')
                    setDataToRender(null)
                    console.log(error)
                }

                if (data) {
                    setDataToRender(data)
                    setFetchError(null)
                }

        }

        fetchData()
    }, [supabase, children])

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
