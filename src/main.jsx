import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById('root')).render(
    <HelmetProvider>
        <Toaster />
        <App />
    </HelmetProvider>
)
