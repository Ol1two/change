
import PropTypes from 'prop-types';
import {useCart} from "../../Hook/CartContext.jsx";
import "./CSS-for-pages/Cart.css" // Создайте файл стилей для корзины, например, Cart.css

export default function Cart() {
    const { cartItems, removeFromCart, clearCart, getTotalPrice } = useCart(); // Получаем состояние корзины и функции из контекста

    return (
        <div className="cart">
            <h2>Корзина</h2>
            {cartItems.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index} className="cart-item">
                            <div className="cart-item-info">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.price} ₽</p>
                                </div>
                            </div>
                            <button className="remove-from-cart" onClick={() => removeFromCart(item)}>
                                Удалить
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            {cartItems.length > 0 && (
                <div className="cart-actions">
                    <p>Общая сумма: {getTotalPrice()} ₽</p>
                    <button className="clear-cart" onClick={() => clearCart()}>
                        Очистить корзину
                    </button>
                    {/* Здесь можно добавить кнопку для оформления заказа */}
                </div>
            )}
        </div>
    );
}

Cart.propTypes = {
    cartItems: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
    removeFromCart: PropTypes.func.isRequired,
    clearCart: PropTypes.func.isRequired,
};