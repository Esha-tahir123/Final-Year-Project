// Backend Code for Running Python, C#, etc.
import axios from 'axios';

// Controller function to execute code
export const runCode = async (req, res) => {
    const { files, language, version } = req.body;

    if (!files || !language || !version) {
        return res.status(400).json({ error: "Code, language, and version are required." });
    }

    try {
        // Preparing the payload for the Piston API
        const response = await axios.post('https://emkc.org/api/v2/piston/execute', {
            language: language,
            version: version,
            files: [
                {
                    name: "main." + (language === 'python' ? 'py' : language === 'csharp' ? 'cs' : 'txt'),
                    content: files[0].content // Get the content from the first file
                }
            ]
        });

        // Sending the output back to the frontend
        res.json({
            output: response.data.run.output,
            stderr: response.data.run.stderr,
        });
    } catch (error) {
        console.error("Error executing code:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: "Error executing code" });
    }
};
