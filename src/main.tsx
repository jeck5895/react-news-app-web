import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import "@fortawesome/fontawesome-free/css/all.css";
import './index.css'
import Home from './views/Home'
import WithNavbar from './layouts/WithNavbar'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<WithNavbar/>}>
          <Route path='/' element={<Home/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
