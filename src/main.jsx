import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AllQuotes from './AllQuotes.jsx'
// import Prueba from './Prueba.jsx'
import '../src/scss/app.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/quotes' element={<AllQuotes />} />
    </Routes>
  </BrowserRouter>
)
