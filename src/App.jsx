import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./Components/Header/Header.jsx"
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Catalog from "./Components/Pages/Catalog.jsx"
import Home from "./Components/Pages/Home.jsx"
import Cart from "./Components/Pages/Cart.jsx"
import {CartProvider} from "./Hook/CartContext.jsx"
import ProductDetail from "./Components/Pages/ProductDetail.jsx"
import Profile from "./Components/Pages/Profile.jsx";
import AuthForm from "./Components/Pages/AuthForm.jsx";

function App() {
    return (
    <BrowserRouter>
        <CartProvider>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/catalog/:category" element={<Catalog />} />
                <Route path="/catalog/:category/:productName" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/auth" element={<AuthForm />} />
            </Routes>
        </CartProvider>
    </BrowserRouter>
    )
}

export default App
