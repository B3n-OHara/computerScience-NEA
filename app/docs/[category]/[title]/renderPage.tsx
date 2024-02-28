'use client'

import { createClient } from "@/utils/supabase/client"
import React, { useEffect, useState } from "react"
import Markdown from "react-markdown"

//render each doc page using a variable passed to the function
export function RenderDocPage({
    children,
} : {
    children: React.ReactNode
}) {

    const supabase = createClient()
    //use the useState() react hook to set each variable using a function
    const [fetchError, setFetchError] = useState<any>(null)
    const [dataReturned, setDataReturned] = useState<any>(null)

    //useEffect() fires the function once as the page renders
    useEffect(() => {
        // async function to fetch the doc page content
        const getContent = async () => {
            const docTitle = children

            //fetch the content of the doc using its title
            const { data, error } = await supabase
                .from('docs')
                .select('content')
                .eq('title', docTitle)
            
                if (error) {
                    //set the error code
                    setFetchError('Unable to Fetch Content')
                    //no data so set null
                    setDataReturned(null)
                    console.log(error)
                }
                if (data) {
                    //successful so set the data
                    setDataReturned(data)
                    //no error
                    setFetchError(null)
                }
        }

        //calls the function
        getContent()
    }, [supabase, children])

    //renders content conditionally
    //uses the markdown plugin to render html from the markdown stored in the database
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