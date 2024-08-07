import React, { useState, useEffect } from 'react';
import { useTests, useAddTest, useUpdateTest, useDeleteTest } from '../integrations/supabase';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SupabaseDemo = () => {
  const [newItemName, setNewItemName] = useState('');
  const { data: tests, isLoading, isError } = useTests();
  const addTestMutation = useAddTest();
  const updateTestMutation = useUpdateTest();
  const deleteTestMutation = useDeleteTest();

  const handleAddItem = async () => {
    if (newItemName.trim()) {
      await addTestMutation.mutateAsync({ name: newItemName });
      setNewItemName('');
    }
  };

  const handleUpdateItem = async (id, newName) => {
    await updateTestMutation.mutateAsync({ id, name: newName });
  };

  const handleDeleteItem = async (id) => {
    await deleteTestMutation.mutateAsync(id);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="p-4 bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900 min-h-screen">
      <h1 className="text-2xl font-bold text-white mb-4">Supabase Demo</h1>
      <div className="mb-4 flex">
        <Input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="New item name"
          className="mr-2"
        />
        <Button onClick={handleAddItem}>Add Item</Button>
      </div>
      <ul className="space-y-2">
        {tests?.map((test) => (
          <li key={test.id} className="flex items-center space-x-2 bg-white p-2 rounded">
            <Input
              type="text"
              defaultValue={test.name}
              onBlur={(e) => handleUpdateItem(test.id, e.target.value)}
              className="flex-grow"
            />
            <Button onClick={() => handleDeleteItem(test.id)} variant="destructive">
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupabaseDemo;
