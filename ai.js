function parseAI(text) {
    function get(key, def) {
        const m = text.match(new RegExp(key + "=(-?[0-9.]+)"));
        return m ? parseFloat(m[1]) : def;
    }

    return {
        vx: get("vx", 0),
        vy: get("vy", 0),
        speed: get("speed", 5)
    };
}