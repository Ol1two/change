import "./CSS-for-pages/styles-for-main-page.css"
import First_Product from "../../Pictures/smratphone-for-catalog.png"
import Second_Product from "../../Pictures/smart-speaker-for-catalog.png"
import StockForMainPage from "./stock-for-main-page.jsx";
import {Link} from "react-router-dom";

export default function CatalogMainPage() {
    return(
        <div className="section-content">
            <section className="content-catalog">
                <h1> Каталог </h1>
                <span className="content-catalog-product">
                    <Link to="/catalog/smartphones">
                        <div className="product-image-container">
                            <img
                                src={First_Product}
                                alt="smartphones"
                            />
                        </div>
                        Смартфоны
                    </Link>
                    <Link to="/catalog/smartspeakers">
                        <div className="product-image-container">
                            <img
                                src={Second_Product}
                                alt="smart_speakers"
                            />
                        </div>
                        Колонки
                    </Link>
                </span>
            </section>

            <section className="content-stock">
                <h1> Акции </h1>
                <span className="content-stock-product">
                    <StockForMainPage />
                </span>
            </section>
        </div>
    )
}