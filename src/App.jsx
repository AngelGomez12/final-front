import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Favs } from './pages/Favs'
import { Details } from './pages/Details'
import './App.css'
import { Layout } from './pages/Layout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/details/:id" element={<Details />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
