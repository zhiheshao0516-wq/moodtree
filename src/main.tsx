import React from 'react'
import { createRoot } from 'react-dom/client'
import { MoodTreeApp } from './moodtree-app-v2'
import './globals.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MoodTreeApp />
  </React.StrictMode>
)
