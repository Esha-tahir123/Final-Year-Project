import React, { useRef, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import { FaPlay } from "react-icons/fa";
import ace from 'ace-builds'; // Import ace configuration
import "./CodeEditor.css";

console.log("Ace Editor HTML and CSS modes loaded"); // Debug log

const CodeEditor = ({ language, code, onCodeChange, output }) => {
  const iframeRef = useRef(null);

  // Set the basePath for Ace Editor
  useEffect(() => {
    ace.config.set("basePath", "/node_modules/ace-builds/src-noconflict");
  }, []);

  const handleRunCode = () => {
    if (["htmlcss", "javascript"].includes(language.toLowerCase())) {
      runHTMLCSSJSCode();
    }
  };

  const runHTMLCSSJSCode = () => {
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Code Output</title>
          ${
            language.toLowerCase() === "htmlcss"
              ? `<style>${code}</style>` // Add CSS content
              : ""
          }
        </head>
        <body>
          ${
            language.toLowerCase() === "htmlcss"
              ? code // Add HTML content for "HTMLCSS"
              : ""
          }
          ${
            language.toLowerCase() === "javascript"
              ? `<script>${code}</script>` // Add JavaScript content
              : ""
          }
        </body>
      </html>
    `;
    if (iframeRef.current) {
      iframeRef.current.srcdoc = htmlContent;
    }
  };

  return (
    <div className="code-editor">
      <div className="editor-header">
        {/* <button onClick={handleRunCode} className="run-button">
          <FaPlay /> Run Code
        </button> */}
      </div>
      <AceEditor
        mode={language.toLowerCase()}
        theme="monokai"
        value={code}
        onChange={onCodeChange}
        name="code-editor"
        width="100%"
        height="400px"
        fontSize={14}
        editorProps={{ $blockScrolling: true }}
      />
      <div className="output-container">
        <h3 className="output-header">Output:</h3>
        <iframe
          ref={iframeRef}
          title="Code Output"
          className="output-iframe"
          sandbox="allow-scripts allow-same-origin"
          style={{ width: "100%", height: "300px", border: "1px solid #ccc" }}
        ></iframe>
      </div>
     // {output && <div className="output-box">{output}</div>}
    </div>
  );
};

export default CodeEditor;
