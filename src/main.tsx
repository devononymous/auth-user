import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  store  from './app/store.ts';

import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';

createRoot(document.getElementById('root')!).render(
 
 <StrictMode>
 <Provider store={store}>
  <CssBaseline/>
    <App />
     </Provider>
  </StrictMode>,
)
