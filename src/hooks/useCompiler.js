// src/hooks/useCompiler.js
export const runCode = async (language, sourceCode) => {
  const response = await fetch("https://emkc.org/api/v2/piston/execute", {
    method: "POST",
    body: JSON.stringify({
      language: language,
      version: "*",
      files: [{ content: sourceCode }],
    }),
  });
  const data = await response.json();
  return data.run.output; // Ye hai tera final result!
};