import { createClient } from "@/utils/supabase/client"
import { redirect } from "next/navigation"
import React from "react"
import Markdown from "react-markdown"
import { RenderDiscussionPage } from "./renderPage"

export async function generateStaticParams() {
    const supabase = createClient()
    
    const { data, error } = await supabase
        .from('discussions')
        .select()

        if (error) {
            redirect('/error')
        }
    
        if (data) {
            return data.map((doc) => ({
                title: doc.title,
            }))
        
        }
}

export default function Page({ 
    params,
}: {
    params: { title: string } 
}) {
    return(
        <div>
            <RenderDiscussionPage>
                {params.title}
            </RenderDiscussionPage>
        </div>
    )
}