import React from 'react';
import { createRoot } from 'react-dom/client';
import { SupabaseProvider } from './integrations/supabase/index.js';
import App from './App.jsx';
import './index.css';

const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

const root = createRoot(canvas);
root.render(
  <React.StrictMode>
    <SupabaseProvider>
      <App ctx={ctx} />
    </SupabaseProvider>
  </React.StrictMode>
);

// Resize canvas on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
