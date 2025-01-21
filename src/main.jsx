import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import 'sass'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home.jsx'
import Product from './page/Product.jsx'
import PageNotFound from './page/PageNotFound.jsx'
import ProductProvider from './page/ProductProvider.jsx'

import Aos from 'aos';

Aos.init()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />
          </Route>
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  </StrictMode>,
)
