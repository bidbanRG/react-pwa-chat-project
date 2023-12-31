import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ChatProvider from './ChatContext.tsx'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <ChatProvider>
    <App />
   </ChatProvider> 
  </React.StrictMode>,
)
