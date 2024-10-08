"use client"
import { useState } from "react"

export default function TalentForm() {
    const [name, setName] = useState("")
    const [socialMedia, setSocialMedia] = useState("")

    async function handleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault()
        await fetch("/api/talent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, socialMedia }),
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Social Media"
                value={socialMedia}
                onChange={(e) => setSocialMedia(e.target.value)}
            />
            <button type="submit">Create Talent</button>
        </form>
    )
}
