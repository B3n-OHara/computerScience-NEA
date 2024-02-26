import { createClient } from "@/utils/supabase/client"
import { redirect } from "next/navigation"
import React from "react"
import Markdown from "react-markdown"
import { RenderPostPage } from "./renderPage"

export async function generateStaticParams() {
    const supabase = createClient()
    
    const { data, error } = await supabase
        .from('posts')
        .select()

        if (error) {
            redirect('/error')
        }
    
        if (data) {
            return data.map((post) => ({
                title: post.title,
            }))
        
        }
}

export default async function Page({ 
    params, 
}: {
    params: { title: string } 
}) {
    return(
        <div>
            <RenderPostPage>
                {params.title}
            </RenderPostPage>
        </div>
    )
}