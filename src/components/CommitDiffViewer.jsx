import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const CommitDiffViewer = () => {
  const [diff, setDiff] = useState('');

  const mockDiff = `
- const oldCode = "console.log('Hello, World!');"
+ const newCode = "console.log('Hello, GPT Engineer!');"
  `;

  const showDiff = () => {
    setDiff(mockDiff);
  };

  return (
    <div className="mt-8 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Commit Diff Viewer</h2>
      <Button onClick={showDiff} className="mb-4">Show Latest Commit Diff</Button>
      {diff && (
        <pre className="bg-white p-4 rounded overflow-x-auto">
          <code>{diff}</code>
        </pre>
      )}
    </div>
  );
};

export default CommitDiffViewer;
