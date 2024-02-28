'use client'

import { createClient } from "@/utils/supabase/client"
import React, { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react"
import { SubmitPreferences } from "./actions"

//function to render a user's preferences with the option to update them inside a form
//using children to get data passed to the function
export function RenderPreferences({
    children,
}: {
    children: React.ReactNode
}) {

    //create supabase client client
    const supabase = createClient()

    //useState() dynamically sets value of variables
    const [fetchError, setFetchError] = useState<any>(null)
    const [preferences, setPreferences] = useState<any>(null)

    //useEffect() fires the function it wraps once at render
    useEffect(() => {
        //data passed to parent function should be the user's id
        const user_id = children

        //function to fetch the specific user's preferences
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('user_preferences')
                .select()
                .eq('user_id', user_id)

                //error when fetching
                if (error) {
                    //error so set error code
                    setFetchError('Unable to Fetch User preferences')
                    //no data so set preferences null
                    setPreferences(null)
                    console.log(error)
                }
                
                //fetching successful
                if (data) {
                    //fetched data so set preferences
                    setPreferences(data)
                    //no error so set error code to null
                    setFetchError(null)
                }
        }

        //calls function
        fetchData()
    }, [supabase, children])

    //conditionally render error message or user preferences
    //render preferences inside of a form that allows updating
    //mapping each attribute to the correct user
    return(
        <form className="flex flex-col gap-y-8 m-8 font-text">
            <div>
                {fetchError && (<p>{fetchError}</p>)}
                {preferences && (
                    <div>
                        {preferences.map((preferences: { user_id: Key | null | undefined; level: string | number | boolean | null | undefined; interest1: string | number | boolean | null | undefined; interest2: string | number | boolean | null | undefined; interest3: string | number | boolean | null | undefined; use_case: string | number | boolean | null | undefined }) => (
                            <div key={preferences.user_id} className="form-control w-1/3 gap-y-6">
                                <div>
                                    <div className="label">
                                        <span className="label-text">Update Your Proficiency Level: </span>
                                    </div>
                                    <select id="level" name="level" defaultValue={preferences.level} className="select select-bordered">
                                        <option value={'Beginner'}>Beginner</option>
                                        <option value={'Intermediate'}>Intermediate</option>
                                        <option value={'Expert'}>Expert</option>
                                    </select>
                                </div>
                                <div>
                                    <div className="label">
                                        <span className="label-text">Update Your Primary Use Case: </span>
                                    </div>
                                    <select id="use_case" name="use_case" defaultValue={preferences.use_case} className="select select-bordered">
                                        <option value={'DevOps'}>DevOps</option>
                                        <option value={'Deployment'}>Deployment</option>
                                        <option value={'Microservices Architecture'}>Microservices Architecture</option>
                                        <option value={'CI/CD'}>CI/CD</option>
                                        <option value={'Infrastructure'}>Infrastructure</option>
                                        <option value={'Scalability'}>Scalability</option>
                                        <option value={'Efficiency'}>Efficiency</option>
                                        <option value={'Portability'}>Portability</option>
                                        <option value={'Security'}>Security</option>
                                        <option value={'Testing'}>Testing</option>
                                    </select>
                                </div>
                                <div>
                                    <div className="label">
                                        <span className="label-text">Update Your First Interest: </span>
                                    </div>
                                    <select id="interest1" name="interest1" defaultValue={preferences.interest1} className="select select-bordered">
                                        <option value={'DevOps'}>DevOps</option>
                                        <option value={'Deployment'}>Deployment</option>
                                        <option value={'Microservices Architecture'}>Microservices Architecture</option>
                                        <option value={'CI/CD'}>CI/CD</option>
                                        <option value={'Infrastructure'}>Infrastructure</option>
                                        <option value={'Scalability'}>Scalability</option>
                                        <option value={'Efficiency'}>Efficiency</option>
                                        <option value={'Portability'}>Portability</option>
                                        <option value={'Security'}>Security</option>
                                        <option value={'Testing'}>Testing</option>
                                    </select>
                                </div>
                                <div>
                                    <div className="label">
                                        <span className="label-text">Update Your Second Interest: </span>
                                    </div>
                                    <select id="interest2" name="interest2" defaultValue={preferences.interest2} className="select select-bordered">
                                        <option value={'DevOps'}>DevOps</option>
                                        <option value={'Deployment'}>Deployment</option>
                                        <option value={'Microservices Architecture'}>Microservices Architecture</option>
                                        <option value={'CI/CD'}>CI/CD</option>
                                        <option value={'Infrastructure'}>Infrastructure</option>
                                        <option value={'Scalability'}>Scalability</option>
                                        <option value={'Efficiency'}>Efficiency</option>
                                        <option value={'Portability'}>Portability</option>
                                        <option value={'Security'}>Security</option>
                                        <option value={'Testing'}>Testing</option>
                                    </select>
                                </div>
                                <div>
                                    <div className="label">
                                        <span className="label-text">Update Your Third Interest: </span>
                                    </div>
                                    <select id="interest3" name="interest3" defaultValue={preferences.interest3} className="select select-bordered">
                                        <option value={'DevOps'}>DevOps</option>
                                        <option value={'Deployment'}>Deployment</option>
                                        <option value={'Microservices Architecture'}>Microservices Architecture</option>
                                        <option value={'CI/CD'}>CI/CD</option>
                                        <option value={'Infrastructure'}>Infrastructure</option>
                                        <option value={'Scalability'}>Scalability</option>
                                        <option value={'Efficiency'}>Efficiency</option>
                                        <option value={'Portability'}>Portability</option>
                                        <option value={'Security'}>Security</option>
                                        <option value={'Testing'}>Testing</option>
                                    </select>
                                </div>
                                
                                <button className="btn btn-lg btn-primary" formAction={SubmitPreferences}>Update Preferences</button>
                            </div>
                            
                        ))}
                    </div>
                )}
            </div>
        </form>
    )
}