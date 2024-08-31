"use client"
import "./style.css"
import { useRouter } from "next/navigation"

export default function Home() {

    const router = useRouter()

    return (
        <>
            <div className="tech" >
                Coming soon!<br />
                <button onClick={() => router.push("/")}>Go to Home</button>
            </div>
        </>
    )
}