export async function GET() {
    const data = await getDataFromYourSource() // Assuming this fetches the array of data

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    })
}

export async function POST() {
    const data = {
        id: "123",
        name: "John Doe",
        socialMedia: "https://twitter.com/johndoe",
        content: ["post1", "post2"],
        role: "Influencer",
        createdAt: new Date(),
    }

    // Wrap the return value in a Response object
    return new Response(JSON.stringify(data), {
        status: 201, // 201 means Created
        headers: { "Content-Type": "application/json" },
    })
}

function getDataFromYourSource() {
    throw new Error("Function not implemented.")
}
