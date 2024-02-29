/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import Image from "next/image"
import WorldDataMap from "@/public/WorldDataMap.svg"
import WaveLines from "@/public/Wave-Line.svg"
import React from "react"

export default function Home() {
    return(
        <div style={{ backgroundImage: "url(/WorldDataMap.svg)" }} className="flex flex-col gap-y-4 mx-8 items-center justify-center min-h-screen bg-fixed bg-center bg-cover">
            
            <div className="font-text italic text-8xl text-primary">
                <h1>Containerise It.</h1>
            </div>

            <div className="grid grid-cols-4 gap-y-32 font-text text-2xl">
                <div className="col-start-2 col-span-2 text-center">
                    <h3>{"That's the general idea at least..."}</h3>
                </div>
                
                <div className="col-start-1 row-start-2 col-span-2 text-center card glass">
                    <div className="m-2">
                        <p>
                            Need something to run on any machine, regardless of hardware?

                            Need an easy way to manage CI/CD?

                            Need a process to be secure and isolated?
                        </p>

                        <p className="text-primary">
                            CONTAINERISE IT
                        </p>
                    </div>
                </div>
                
                <div className="col-start-3 row-start-3 col-span-2 card glass">
                    <div className="m-2">
                        <p>So you've heard of containerisation. Or maybe you haven't and you're looking for a way to do all of the things listed above and more.</p>
                        <p>But you've scoured the internet looking for resources.</p>
                        <p>Your search results would have all pointed to lengthy Youtube videos, Docker, Kubernetes, Command Line Interfaces, orchestration, packages, dependencies, DockerFiles ......</p>
                        <p>To harness the power of containerisation you shouldn't have to piece everything together yourself via endless hours of scrolling through pages upon pages of various documentation.</p>
                    </div>
                </div>
                <div className="col-start-1 col-span-2 row-start-4 card glass">
                    <div className="m-2">
                        <p>That's where ContaineriseIt comes in.</p>
                        <p>Clear and easy to use documnetation? Done</p>
                        <p>Detailed guides and walkthroughs? Done</p>
                        <p>Personal containers and virtual machines streamed to your browser to experiment with? Done</p>
                    </div>
                </div>
                <div className="col-start-3 col-span-2 row-start-5 card glass">
                    <div className="m-2">
                        <p>
                            The Community is a major part of software engineering, and it's guaranteed that if you are stuck or have a question about something - someone else will too. 
                            That's why there's a <Link href={"./community"} className="link text-primary" >Community</Link> hub. 
                            Where you can host discussions, or post blog-like pages (written in markdown) to share your own thoughts on a topic, or to provide guides to others, or even to just share your own achievements.
                        </p>
                    </div>
                </div>
                <div className="col-start-2 col-span-2 row-start-6 text-center flex flex-col gap-y-2">
                    <p>If that all sounds like something you can get behind,</p>

                    <button className="btn btn-lg btn-primary"><Link href={"/signup"}>Get Started</Link></button>  
                </div>
            </div>
            
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>
                        ContaineriseIt is a project built for the AQA A Level Computer Science Non-Exam Assessment (NEA). 
                        The NEA is designed to test not only student's coding skills, but also that of their documentation abilities.
                        If you find any broken features or other bugs, please write a short summary of the issue in the contact page's form. <Link href={"./contact"} className="text-primary">Contact</Link>
                    </p>
                </aside>
            </footer>
        </div>
    )
}
