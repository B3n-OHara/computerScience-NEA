/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import "./globals.css"
import Image from "next/image"
import WorldDataMap from "@/public/WorldDataMap.svg"
import WaveLines from "@/public/Wave-Line.svg"

export default function Home() {
    return(
        <div>
            <div className="bg-fixed">
                <div className="absolute -z-20">
                    <Image 
                        src={WorldDataMap}
                        quality={100}
                        alt="World Data Map"
                    />
                </div>
                <div className="absolute -z-30">
                    <Image 
                        src={WaveLines}
                        quality={100}
                        alt="World Data Map"
                    />
                </div>
            </div>
            
            <div className="font-text italic text-8xl text-primary">
                <h1>Containerise It.</h1>
            </div>

            <div className="grid grid-cols-3 gap-y-24">
                
                
                <div>
                    <h3>{"That's the general idea at least..."}</h3>
                </div>
                
                <div>
                    <p>
                        Need something to run on any machine, regardless of hardware?

                        Need an easy way to manage CI/CD?

                        Need a process to be secure and isolated?
                    </p>

                    <p>
                        CONTAINERISE IT
                    </p>
                </div>
                
                <div>
                    <p>So you've heard of containerisation. Or maybe you haven't and you're looking for a way to do all of the things listed above and more.</p>
                    <p>But you've scoured the internet looking for resources.</p>
                    <p>Your search results would have all pointed to lengthy Youtube videos, Docker, Kubernetes, Command Line Interfaces, orchestration, packages, dependencies, DockerFiles ......</p>
                    <p>To harness the power of containerisation you shouldn't have to piece everything together yourself via endless hours of scrolling through pages upon pages of various documentation.</p>
                </div>
                <div>
                    <p>That's where ContaineriseIt comes in</p>
                    <p>Clear and easy to use documnetation? Done</p>
                    <p>Detailed guides and walkthroughs? Done</p>
                    <p>Personal containers and virtual machines streamed to your browser to experiment with? Done</p>
                </div>
                <div>
                    <p>
                        The Community is a major part of software engineering, and it's guaranteed that if you have are stuck or have a question about something - someone else will too. 
                        That's why there's a <Link href={"./community"}>Community</Link> hub. 
                        Where you can host discussions, or post blog-like pages (written in markdown) to share your own thoughts on a topic, or to provide guides to others, or even to just share your own achievements.
                    </p>
                </div>
                <div>
                    <p>If that all sounds like something you can get behind,</p>

                    <Link href={"./auth/(signup)"}>Get Started</Link>  
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
