import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'

//import Categories from './pages/Categories'
//import Product from './pages/Product'
//import Checkout from './pages/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
)

export default Rotas

/*
<Route path="/product/:id" element={<Product />} />
*/
