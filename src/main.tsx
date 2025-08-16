import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@devnomic/marquee/dist/index.css'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
