import mongoose from "mongoose";

const pythonTaskSchema = new mongoose.Schema({
            "title": "string",
        "description": "string",
        "difficulty": "string",
        "level": "string",
        "existingCode": "string",
        "testCases": [
          {
            "condition": "string"
          }
        ],
        "solutionExplanation": "string",
        "language": "string"
      }


    )
      
const PythonTask = mongoose.model("PythonTask", pythonTaskSchema);
export default PythonTask;
