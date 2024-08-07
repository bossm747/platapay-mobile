import React, { useState } from 'react';
import { useTests, useAddTest, useUpdateTest, useDeleteTest } from '../integrations/supabase';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const SupabaseDemo = () => {
  const [newItemName, setNewItemName] = useState('');
  const { data: tests, isLoading, isError } = useTests();
  const addTestMutation = useAddTest();
  const updateTestMutation = useUpdateTest();
  const deleteTestMutation = useDeleteTest();
  const { toast } = useToast();

  const handleAddItem = async () => {
    if (newItemName.trim()) {
      try {
        await addTestMutation.mutateAsync({ name: newItemName });
        setNewItemName('');
        toast({ title: "Item added successfully", type: "success" });
      } catch (error) {
        toast({ title: "Failed to add item", description: error.message, type: "error" });
      }
    }
  };

  const handleUpdateItem = async (id, newName) => {
    try {
      await updateTestMutation.mutateAsync({ id, name: newName });
      toast({ title: "Item updated successfully", type: "success" });
    } catch (error) {
      toast({ title: "Failed to update item", description: error.message, type: "error" });
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteTestMutation.mutateAsync(id);
      toast({ title: "Item deleted successfully", type: "success" });
    } catch (error) {
      toast({ title: "Failed to delete item", description: error.message, type: "error" });
    }
  };

  if (isLoading) return <div className="text-white text-center p-4">Loading...</div>;
  if (isError) return <div className="text-red-500 text-center p-4">Error fetching data</div>;

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
        <Button onClick={handleAddItem} disabled={addTestMutation.isLoading}>
          {addTestMutation.isLoading ? 'Adding...' : 'Add Item'}
        </Button>
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
            <Button 
              onClick={() => handleDeleteItem(test.id)} 
              variant="destructive"
              disabled={deleteTestMutation.isLoading}
            >
              {deleteTestMutation.isLoading ? 'Deleting...' : 'Delete'}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupabaseDemo;
