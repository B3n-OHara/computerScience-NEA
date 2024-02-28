'use client'

import { createClient } from "@/utils/supabase/client"
import { RenderLinks } from "./renderDocLinks"
import React, { Key, useEffect, useState } from "react"

export function RenderCategories() {

    const supabase = createClient()
    //useState() allows for dynamic setting of values
    const [fetchError, setFetchError] = useState<any>(null)
    const [dataToRender, setDataToRender] = useState<any>(null)

    //fires function once at render
    useEffect(() => {
        //async function to fetch all documentation categories
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('docs_categories')
                .select()

                //if there's an error fetching
                if (error) {
                    //set error code
                    setFetchError('Unable to Fetch Documentation Categories')
                    //no data so set null
                    setDataToRender(null)
                    console.log(error)
                }

                //if fetch is successful
                if (data) {
                    //set data
                    setDataToRender(data)
                    //no error so set null
                    setFetchError(null)
                }
        }

        //calls function
        fetchData()
    }, [supabase])

    //conditional rendering of category drop downs in menu filled with dynamically rendered links
    //maps each attribute to the doc and renders
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
                                <RenderLinks>
                                    {dataToRender.category}
                                </RenderLinks>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )

}