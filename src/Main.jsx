import App from './App'
import { ThemeProvider } from './contexts/theme'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(
  document.getElementById('root')
).render(
<ThemeProvider>
    <App />
  </ThemeProvider>
)
