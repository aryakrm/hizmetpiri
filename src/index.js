import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { initializeApp } from 'firebase/app'
import 'firebase/auth' // Import the necessary Firebase services

import { firebaseConfig } from './firbase'

const root = ReactDOM.createRoot(document.getElementById('root'))

// Initialize Firebase
const app = initializeApp(firebaseConfig)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
)
