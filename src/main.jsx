import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AllQuotes from './AllQuotes.jsx'
import Footer from './Footer.jsx'
import '../src/scss/app.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DataProvider } from './context/DataContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/quotes' element={<AllQuotes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </DataProvider>
)
