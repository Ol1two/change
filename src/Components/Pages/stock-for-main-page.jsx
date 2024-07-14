import ProductCard from '../ProdactCard/ProdactCard.jsx';
import products from '../ProdactCard/Products.js'
import "./CSS-for-pages/styles-for-main-page.css"

export default function StockForMainPage( ) {

    const discountedProducts = products.filter(product => product.discount);

    return(
        <div className="catalog-main-page">
            {discountedProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    )
}