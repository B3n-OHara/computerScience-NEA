import { createClient } from "@/utils/supabase/client"
import { redirect } from "next/navigation"
import React from "react"
import Markdown from "react-markdown"
import { RenderDocPage } from "./renderPage"

//statically generats parameters to use when naming the dynamic route segments
export async function generateStaticParams() {
    const supabase = createClient()
    
    //fetches all documentation from supabase
    const { data, error } = await supabase
        .from('docs')
        .select()

        //if there's an error fetching redirect to error page
        if (error) {
            redirect('/error')
        }
        
        //if fetching is successful
        if (data) {
            //map each document with a category and title
            return data.map((doc) => ({
                category: doc.category,
                title: doc.title,
            }))
        
        }
}

//render the page using the static params
export default async function Page({
    params,
} : {
    params: { category: string; title: string }
}) {
    //those params set the [category] and [title]

    //dynamically render the doc page using the title
    return(
        <div>
            <RenderDocPage>
                {params.title}
            </RenderDocPage>
        </div>
    )
}