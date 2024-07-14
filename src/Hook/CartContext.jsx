import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext()

export const useCart = () => {
    return useContext(CartContext)
}

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        setCartItems([...cartItems, { ...product }])
    }

    const removeFromCart = (productToRemove) => {
        const updatedCart = cartItems.filter(item => item !== productToRemove)
        setCartItems(updatedCart)
    }

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            const priceWithoutSpaces = item.price.split(' ').join('');
            return total + parseFloat(priceWithoutSpaces);
        }, 0);
    };

    const clearCart = () => {
        setCartItems([])
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired, // Добавляем проверку PropTypes для children
};
