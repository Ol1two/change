import { useParams } from 'react-router-dom';
import products from '../ProdactCard/Products.js'; // Импортируйте массив продуктов
import "./CSS-for-pages/ProductDetail.css";
import { useCart } from "../../Hook/CartContext.jsx";
import  {useState} from "react";

export default function ProductDetail() {
    const { category, productName } = useParams();
    const { addToCart } = useCart();
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const product = products.find(
        (item) => item.category === category && item.name === productName
    );

    const handleAddToCart = () => {
        addToCart(product);
        setIsAddedToCart(true);
    };

    return (
        <div className="product-detail">
            <div className="product-detail-left">
                <img src={product.image} alt={product.name} className="product-detail-image"/>
            </div>
            <div className="product-detail-center">
                <h2>{product.name}</h2>
                {category.includes("smartphones") ?
                    (<ul className="product-attributes">
                        <li>Экран: {product.display}</li>
                        <li>Блок камер: {product.main_cam}</li>
                        <li>Память: {product.memory}</li>
                        <li>ОЗУ: {product.ram}</li>
                        <li>Бренд: {product.brand}</li>
                    </ul>
                    ) : (
                        <ul className="product-attributes">
                            <li>Суммарная мощность: {product.display}</li>
                            <li>Беспроводная связь: {product.main_cam}</li>
                            <li>Тип питания: {product.memory}</li>
                            <li>Диаметр НЧ-динамика: {product.ram}</li>
                            <li>Бренд: {product.brand}</li>
                        </ul>
                    )
                }
            </div>
            <div className="product-detail-right">
                <div className="product-price">
                    <span className="current-price">{product.price} ₽</span>
                </div>
                <button className="add-to-cart" onClick={handleAddToCart} disabled={isAddedToCart}>
                {isAddedToCart ? 'Добавлено в корзину' : 'В корзину'}
                </button>
            </div>
            <div className="product-reviews">
                <h3>Отзывы покупателей</h3>
                <p>Здесь должны были быть отзывы покупателей с рейтингом((...</p>
            </div>
        </div>
    );
}
