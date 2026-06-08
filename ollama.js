async function askAI(input) {
    const res = await fetch(OLLAMA_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: MODEL,
            stream: false,
            messages: [
                {
                    role: "system",
                    content: `
You control a survival game.

Return ONLY in this format:

vx=-1
vy=0
speed=8

Rules:
- NO explanation
- NO JSON
- ONLY key=value lines
`
                },
                {
                    role: "user",
                    content: input
                }
            ]
        })
    });

    const data = await res.json();
    return data.message.content;
}