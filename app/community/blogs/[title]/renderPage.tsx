'use client'

import { createClient } from "@/utils/supabase/client"
import React, { Key, useEffect, useState } from "react"
import Markdown from "react-markdown"
import { FetchMetadata } from "@/utils/supabase/fetchUserMetadata"

export function RenderPostPage({
    children,
} : {
    children: React.ReactNode
}) {

    const supabase = createClient()
    const [fetchError, setFetchError] = useState<any>(null)
    const [dataReturned, setDataReturned] = useState<any>(null)
    const [fetchError2, setFetchError2] = useState<any>(null)
    const [dataReturned2, setDataReturned2] = useState<any>(null)


    useEffect(() => {
        const getPostData = async () => {
            const postTitle = children

            const { data, error } = await supabase
                .from('posts')
                .select()
                .eq('title', postTitle)
            
                if (error) {
                    setFetchError('Unable to Fetch Content')
                    setDataReturned(null)
                    console.log(error)
                }
                if (data) {
                    setDataReturned(data)
                    setFetchError(null)
                }
        }

        getPostData()
    }, [supabase, children])

    return(
        <div className="flex flex-col items-center">
            {fetchError && (<p>{fetchError}</p>)}
            {dataReturned && (
                <article className="prose max-w-none w-3/5">
                    {dataReturned.map((dataReturned : { post_id: Key | string | null | undefined; creator_id: Key | string | null | undefined; creation_date: string | null | undefined; title: string | null | undefined; content: string | null | undefined; }) => (
                        
                        
                        <div key={dataReturned.post_id} className="flex flex-col items-center">
                            <h1>{dataReturned.title}</h1>
                            <h3>Posted By: {FetchMetadata(dataReturned.creator_id)}</h3>
                            <Markdown>
                                {dataReturned.content}
                            </Markdown>
                        </div>
                    ))}
                </article>
            )}
        </div>
    )
}