const handleClrarifai = async (req, res) => {
  try {
    const {
      imageUrl,
      modelId = "face-detection",
      userId = "clarifai",
      appId = "main",
    } = req.body;
    if (!imageUrl) return res.status(400).json({ error: "mandatory imageUrl" });

    const body = {
      user_app_id: { user_id: userId, app_id: appId },
      inputs: [{ data: { image: { url: imageUrl } } }],
    };

    const r = await fetch(
      `https://api.clarifai.com/v2/models/${modelId}/outputs`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Key ${process.env.CLARIFAI_PAT}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await r.json();
    return res.status(r.status).json(data);
  } catch (e) {
    return res.status(500).json({ error: "proxy_failed", details: e.message });
  }
};

module.exports =  {
  handleClrarifai
}