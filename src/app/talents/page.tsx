interface TalentFormProps {
    name: string
    socialMedia: string
}

export default function TalentForm({ name, socialMedia }: TalentFormProps) {
    const [talentName] = useState(name)
    const [talentSocialMedia] = useState(socialMedia)

    const handleSubmit = async () => {
        event.preventDefault()
        await fetch("/api/talent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ talentName, talentSocialMedia }),
        })
    }
    ;<>
        return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={talentName} />
            <input
                type="text"
                placeholder="Social Media"
                value={talentSocialMedia}
            />
            <button type="submit">Create Talent</button>
        </form>
        ) &rbrace;
    </>
    function useState(name: string): [any, any] {
        throw new Error("Function not implemented.")
    }
}
