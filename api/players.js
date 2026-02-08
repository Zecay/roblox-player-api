export default async function handler(req, res) {
    const universeId = "7671049560";

    try {
        const r = await fetch(
            `https://games.roblox.com/v1/games?universeIds=${universeId}`
        );
        const data = await r.json();

        // ✅ Add CORS headers
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET");
        res.setHeader("Content-Type", "application/json");

        res.status(200).json({ players: data.data[0].playing });
    } catch (error) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET");
        res.setHeader("Content-Type", "application/json");

        res.status(500).json({ players: 0 });
    }
}
