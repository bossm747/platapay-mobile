import { createClient } from '@supabase/supabase-js';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

import React from "react";
export const queryClient = new QueryClient();
export function SupabaseProvider({ children }) {
    return React.createElement(QueryClientProvider, { client: queryClient }, children);
}

const fromSupabase = async (query) => {
    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return data;
};

/* supabase integration types

### Test

| name       | type                     | format | required |
|------------|--------------------------|--------|----------|
| id         | bigint                   | number | true     |
| created_at | timestamp with time zone | string | true     |

*/

// Hooks for Test table
export const useTests = () => useQuery({
    queryKey: ['tests'],
    queryFn: () => fromSupabase(supabase.from('Test').select('*'))
});

export const useTest = (id) => useQuery({
    queryKey: ['test', id],
    queryFn: () => fromSupabase(supabase.from('Test').select('*').eq('id', id).single())
});

export const useAddTest = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newTest) => fromSupabase(supabase.from('Test').insert([newTest])),
        onSuccess: () => {
            queryClient.invalidateQueries('tests');
        },
    });
};

export const useUpdateTest = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, ...updateData }) => fromSupabase(supabase.from('Test').update(updateData).eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('tests');
        },
    });
};

export const useDeleteTest = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('Test').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('tests');
        },
    });
};