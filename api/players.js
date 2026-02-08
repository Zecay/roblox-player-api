export default async function handler(req, res) {
    const universeId = "7671049560";

    try {
        const r = await fetch(
            `https://games.roblox.com/v1/games?universeIds=${universeId}`
        );
        const data = await r.json();

        res.status(200).json({
            players: data.data[0].playing
        });
    } catch {
        res.status(500).json({ players: 0 });
    }
}
