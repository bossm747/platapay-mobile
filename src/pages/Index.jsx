import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useOpenAI } from "../integrations/openai";

const Index = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const { generateText, loading, error } = useOpenAI();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await generateText(prompt);
    if (result) {
      setResponse(result);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900 p-4">
      <h1 className="text-3xl font-bold text-white mb-6">OpenAI Text Generation</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Enter your prompt</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt here..."
              className="mb-4"
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Generating..." : "Generate Text"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {error && (
        <Card className="mb-6 bg-red-100">
          <CardContent>
            <p className="text-red-600">{error}</p>
          </CardContent>
        </Card>
      )}

      {response && (
        <Card>
          <CardHeader>
            <CardTitle>Generated Text</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{response}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Index;
