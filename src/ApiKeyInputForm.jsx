// src/ApiKeyInputForm.jsx
import React, { useState } from "react";

function ApiKeyInputForm({ onApiKeySubmit }) {
  const [apiKey, setApiKey] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onApiKeySubmit(apiKey);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="apiKey">Enter your GPT API Key:</label>
      <input
        type="text"
        id="apiKey"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ApiKeyInputForm;
