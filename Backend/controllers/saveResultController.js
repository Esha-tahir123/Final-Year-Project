export const saveResult = async (req, res) => {
  const resultData = req.body;

  console.log("Saving Result to DB:", resultData);

  if (!resultData.task || resultData.score == null) {
    console.error("Invalid result payload. Score and task are required.");
    return res.status(400).json({ error: "Invalid result payload." });
  }

  try {
    // Mock save to DB (replace with actual database logic)
    const savedResult = {
      ...resultData,
      id: Date.now(), // Replace this with actual DB ID logic
    };

    console.log("Result Saved Successfully:", savedResult);

    res.json({ message: "Result saved successfully", savedResult });
  } catch (error) {
    console.error("Error saving result:", error);
    res.status(500).json({ error: "An error occurred while saving the result." });
  }
};
