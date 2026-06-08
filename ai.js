function parsePlan(text) {
    const blocks = text.split("action=").filter(b => b.trim());

    return blocks.map(block => {
        function get(key) {
            const m = block.match(new RegExp(key + "=(.*)"));
            return m ? m[1].split("\n")[0].trim() : null;
        }

        return {
            action: "move",
            dir: get("dir"),
            duration: parseFloat(get("duration") || 1)
        };
    });
}