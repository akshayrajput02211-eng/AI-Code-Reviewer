const aiservice = require('../service/ai.service');

module.exports.getReview = async (req, res) => {
  const prompt = req.body.prompt;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const review = await aiservice.getAIReview(prompt);
    res.json({ review });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
