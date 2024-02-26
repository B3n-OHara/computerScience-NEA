'use client'

import { createClient } from "@/utils/supabase/client"
import React, { useEffect, useState } from "react"
import Markdown from "react-markdown"

export function RenderDiscussionPage({
    children,
} : {
    children: React.ReactNode
}) {

    const supabase = createClient()
    const [fetchError, setFetchError] = useState<any>(null)
    const [dataReturned, setDataReturned] = useState<any>(null)

    useEffect(() => {
        const getContent = async () => {
            const discussionTitle = children

            const { data, error } = await supabase
                .from('discussions')
                .select('content')
                .eq('title', discussionTitle)
            
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

        getContent()
    }, [supabase, children])

    return(
        <div className="flex flex-col items-center">
            {fetchError && (<p>{fetchError}</p>)}
            {dataReturned && (
                <article className="prose max-w-none w-3/5">
                    {dataReturned.map((dataReturned : { content: string | null | undefined; }) => (
                        <Markdown key={1}>
                            {dataReturned.content}
                        </Markdown>
                    ))}
                </article>
            )}
        </div>
    )
}