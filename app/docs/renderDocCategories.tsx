'use client'

import { createClient } from "@/utils/supabase/client"
import { RenderLinks } from "./renderDocLinks"
import React, { Key, useEffect, useState } from "react"

export function RenderCategories() {

    const supabase = createClient()

    const [fetchError, setFetchError] = useState<any>(null)
    const [dataToRender, setDataToRender] = useState<any>(null)

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('docs_categories')
                .select()

                if (error) {
                    setFetchError('Unable to Fetch Documentation Categories')
                    setDataToRender(null)
                    console.log(error)
                }

                if (data) {
                    setDataToRender(data)
                    setFetchError(null)
                }
        }

        fetchData()
    }, [supabase])

    return(
        <div>
            {fetchError && (<p>{fetchError}</p>)}
            {dataToRender && (
                <div className="">
                    {dataToRender.map((dataToRender: { id: Key | null | undefined; category: string | null | undefined}) => (
                        <div key={dataToRender.id} className="collapse collapse-arrow">
                            <input type="checkbox" />
                            <div className="collapse-title font-medium">
                                {dataToRender.category}
                            </div>
                            <div className="collapse-content">
                                <ul>
                                    <RenderLinks>
                                        {dataToRender.category}
                                    </RenderLinks>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )

}