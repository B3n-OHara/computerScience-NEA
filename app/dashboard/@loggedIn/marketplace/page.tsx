import { FetchContainers } from "@/utils/supabase/fetchContainers"
import Image from "next/image";
import React from "react"

export default function Marketplace() {
    const containerArray = FetchContainers()
    
    interface Container {
        container_id: string;
        name: string;
        base_os: string;
        description: string;
        icon_url: string;
    }

    interface Props {
        containers: Container[];
    }

    const ContainerList: React.FC<Props> = ({ containers }) => {
        return (
            <div>
                {containers.map(container => (
                    <div key={container.container_id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><Image src={container.icon_url} alt="container icon" width={500} height={500}/></figure>
                        <div className="card-body">
                            <h2 className="card-title">{container.name}</h2>
                            <p>{container.description}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">{container.base_os}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return(
        <div className="grid-cols-4">
            <ContainerList containers={containerArray} />
        </div>
    )
}