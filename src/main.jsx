// src/main.jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ApiKeyInputForm from "./ApiKeyInputForm";
import "./index.css";

function Main() {
  const [apiKey, setApiKey] = useState(null);

  const handleApiKeySubmit = (submittedApiKey) => {
    setApiKey(submittedApiKey);
  };

  return (
    <div>
      {apiKey ? (
        <App apiKey={apiKey} />
      ) : (
        <ApiKeyInputForm onApiKeySubmit={handleApiKeySubmit} />
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
