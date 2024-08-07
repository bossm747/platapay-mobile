import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const OpenAIContext = createContext();

export const useOpenAI = () => useContext(OpenAIContext);

export const OpenAIProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateText = async (prompt) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: prompt,
          max_tokens: 100,
        },
        {
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setLoading(false);
      return response.data.choices[0].text.trim();
    } catch (err) {
      setLoading(false);
      setError(err.message);
      return null;
    }
  };

  return (
    <OpenAIContext.Provider value={{ generateText, loading, error }}>
      {children}
    </OpenAIContext.Provider>
  );
};
