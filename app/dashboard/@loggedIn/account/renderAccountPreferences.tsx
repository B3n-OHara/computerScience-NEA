'use client'

import { createClient } from "@/utils/supabase/client"
import React, { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react"

export function RenderPreferences({
    children,
}: {
    children: React.ReactNode
}) {

    const supabase = createClient()

    const [fetchError, setFetchError] = useState<any>(null)
    const [preferences, setPreferences] = useState<any>(null)

    useEffect(() => {
        const user_id = children

        const fetchData = async () => {
            const { data, error } = await supabase
                .from('user_preferences')
                .select()
                .eq('user_id', user_id)

                if (error) {
                    setFetchError('Unable to Fetch User preferences')
                    setPreferences(null)
                    console.log(error)
                }
                if (data) {
                    setPreferences(data)
                    setFetchError(null)
                }
        }

        fetchData()
    }, [supabase, children])

    return(
        <form className="flex flex-col gap-y-8 m-8">
            <div>
                {fetchError && (<p>{fetchError}</p>)}
                {preferences && (
                    <div>
                        {preferences.map((preferences: { user_id: Key | null | undefined; level: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; interest1: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; interest2: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; interest3: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; use_case: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined }) => (
                            <div key={preferences.user_id}>
                                <p>{preferences.level}</p>
                                <p>{preferences.interest1}</p>
                                <p>{preferences.interest2}</p>
                                <p>{preferences.interest3}</p>
                                <p>{preferences.use_case}</p>
                            </div>
                            
                        ))}
                    </div>
                )}
            </div>
        </form>
    )
}