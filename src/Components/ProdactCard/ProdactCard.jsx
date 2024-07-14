import PropTypes from 'prop-types';
import {useState} from "react";
import {useCart} from "../../Hook/CartContext.jsx";
import "../Pages/CSS-for-pages/ProdactCard.css"
import {Link} from "react-router-dom";

export default function ProductCard({ product } ) {
    const { addToCart } = useCart(); // Получаем функцию addToCart из контекста
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const handleAddToCart = () => {
        if (product.availability === "В наличии") {
            addToCart(product); // Вызываем функцию addToCart из контекста
            setIsAddedToCart(true);
        }
    };


    return (
        <div className="product-card">
            <Link to={`/catalog/${product.category}/${product.name}`}>
                <div className="product-card-image-container">
                    {product.discount &&
                        <span
                            className="badge discount">{product.discount}
                    </span>
                    }
                    {product.new && <span className="badge new">
                    NEW
                </span>
                    }
                    <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                    />
                </div>
            </Link>
            <div className="product-info">
                <h3>{product.name}</h3>
                <div className="product-price">
                    <span className="current-price">
                        {product.price} ₽
                    </span>
                    {product.oldPrice && <span className="old-price">{product.oldPrice} ₽</span>}
                </div>
                <span className="availability">
                    {product.availability}
                </span>
                <div className="product-actions">
                    {!isAddedToCart ? (
                        <button
                            className="add-to-cart"
                            onClick={handleAddToCart}
                            disabled={product.availability !== "В наличии"}
                        >
                            В корзину
                        </button>
                    ) : (
                        <span className="added-to-cart">Добавлено в корзину</span>
                    )}
                    <button className="add-to-wishlist">
                        <svg
                            className="heart-icon"
                            width="35"
                            height="26"
                            viewBox="0 0 22 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.612 2.82611C17.1722 2.40569 16.65 2.07219 16.0752 1.84465C15.5005 1.61711 14.8844 1.5 14.2623 1.5C13.6401 1.5 13.0241 1.61711 12.4493 1.84465C11.8746 2.07219 11.3524 2.40569 10.9126 2.82611L9.99977 3.69821L9.08699 2.82611C8.19858 1.9773 6.99364 1.50044 5.73725 1.50044C4.48085 1.50044 3.27591 1.9773 2.38751 2.82611C1.4991 3.67492 1 4.82616 1 6.02656C1 7.22696 1.4991 8.37819 2.38751 9.227L3.30029 10.0991L9.99977 16.5L16.6992 10.0991L17.612 9.227C18.0521 8.80679 18.4011 8.30785 18.6393 7.75871C18.8774 7.20957 19 6.62097 19 6.02656C19 5.43214 18.8774 4.84355 18.6393 4.2944C18.4011 3.74526 18.0521 3.24633 17.612 2.82611Z"
                                stroke="#0C0C0C"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        oldPrice: PropTypes.string,
        availability: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        discount: PropTypes.string,
        new: PropTypes.bool
    }).isRequired,
};