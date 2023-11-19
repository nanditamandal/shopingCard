
import { Routes, Route,  } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import NotFound from './pages/NotFound'
import Card from './pages/Card'
import Header from './pages/Header'


function App() {
  

  return (
    <>
    <Header/>
     <Routes>
       <Route path="/" element={<Home></Home>}/>
       <Route path="/productDetails/:id" element={<ProductDetails></ProductDetails>}/>
       <Route path="/*" element={<NotFound></NotFound>}/>
       <Route path="/card" element={<Card/>} />

       </Routes>
    
      
      {/* <Home/> */}
    </>
  )
}

export default App
