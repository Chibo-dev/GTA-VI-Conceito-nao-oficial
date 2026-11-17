import { createRoot } from 'react-dom/client'
import '@fontsource/overpass/500.css'
import '@fontsource/overpass/700.css'
import '@fontsource/overpass/800.css'
import '@fontsource/overpass/900.css'
import '@fontsource/barlow-condensed/900-italic.css'
import '@fontsource/yellowtail/400.css'
import './styles.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App />)
