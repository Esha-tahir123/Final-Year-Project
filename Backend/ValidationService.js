import stylelint from "stylelint";
import { JSDOM } from "jsdom";
import { exec } from "child_process";
import fs from "fs/promises";
import path from "path";
import { ESLint } from "eslint";

export const validateHtml = (code) => {
  const errors = [];
  try {
    const dom = new JSDOM(code);
    if (dom) {
      console.log("HTML is valid.");
    }
  } catch (e) {
    errors.push(e.message);
  }
  return errors;
};

export const validateCss = async (code) => {
  const result = await stylelint.lint({ code });
  return result.errored
    ? result.results[0].warnings.map((warning) => warning.text)
    : [];
};

export const validateJavaScript = async (code) => {
  const eslint = new ESLint();
  const results = await eslint.lintText(code);
  return results[0].messages.map(
    (msg) => `${msg.message} (${msg.line}:${msg.column})`
  );
};

export const validatePython = async (code) => {
  const result = await runCode("python", code);
  return result.error ? [result.error] : [];
};

export const validateCSharp = async (code) => {
  const result = await runCode("csharp", code);
  return result.error ? [result.error] : [];
};

export const runCode = async (language, code) => {
  const tempDir = path.join(process.cwd(), "temp");
  await fs.mkdir(tempDir, { recursive: true });

  const fileName = `temp_${Date.now()}.${getFileExtension(language)}`;
  const filePath = path.join(tempDir, fileName);

  try {
    await fs.writeFile(filePath, code);

    const command = getRunCommand(language, fileName);
    const { stdout, stderr } = await executeCommand(command, tempDir);

    await fs.unlink(filePath);

    if (stderr) {
      return { error: stderr, output: null };
    }
    return { error: null, output: stdout };
  } catch (error) {
    console.error("Error running code:", error);
    return { error: error.message, output: null };
  }
};

const getFileExtension = (language) => {
  const extensions = {
    javascript: "js",
    python: "py",
    csharp: "cs",
    html: "html",
    css: "css",
  };
  return extensions[language];
};

const getRunCommand = (language, fileName) => {
  const commands = {
    javascript: `node ${fileName}`,
    python: `python ${fileName}`,
    csharp: `dotnet run ${fileName}`,
    html: `echo "HTML files cannot be executed directly."`,
    css: `echo "CSS files cannot be executed directly."`,
  };
  return commands[language];
};

const executeCommand = (command, cwd) => {
  return new Promise((resolve, reject) => {
    exec(command, { cwd }, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
};
