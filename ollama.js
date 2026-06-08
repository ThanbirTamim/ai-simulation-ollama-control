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
You are a GAME ACTION PLANNER.

Convert user command into step-by-step actions.

Return ONLY in this format:

action=move
dir=right
duration=1

action=move
dir=up
duration=2

RULES:
- NO JSON
- NO explanation
- ONLY blocks like above
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