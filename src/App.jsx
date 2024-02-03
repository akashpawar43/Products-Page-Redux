import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>  
      <Route path="/product/:id" element={<ProductPage/>}/>  
      </Routes>
    </BrowserRouter>
  )
}
