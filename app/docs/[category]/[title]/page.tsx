import { createClient } from "@/utils/supabase/client"
import { redirect } from "next/navigation"
import React from "react"
import Markdown from "react-markdown"
import { RenderDocPage } from "./renderPage"

export async function generateStaticParams() {
    const supabase = createClient()
    
    const { data, error } = await supabase
        .from('docs')
        .select()

    if (error) {
        redirect('/error')
    }
    
    if (data) {
        return data.map((doc) => ({
            id: doc.id,
            created_at: doc.created_at,
            category: doc.section,
            title: doc.title,
            content: doc.content,
        }))
    }
}

export default function Page({
    params,
} : {
    params: { category: string; title: string }
}) {


    return(
        <div>
            <RenderDocPage>
                {params.title}
            </RenderDocPage>
        </div>
    )
}