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
            category: doc.section,
            title: doc.title,
        }))
    }
}

export default function Page({
    params,
} : {
    params: { category: string; title: string }
}) {

    const { category, title } = params

    return(
        <div>
            <RenderDocPage>
                {params.title}
            </RenderDocPage>
        </div>
    )
}