//import {Container, Navbar, NavbarBrand} from "react-bootstrap";
import "./Navbar.css"
import Catalog_Icon from "../icons/icon-catalog.svg"
import Basket_Icon from "../icons/icon basket.svg"
import Profile_Icon from "../icons/icon profile.svg"
import {Link} from "react-router-dom";


export default function Header() {
    return(
        <header className="main-header">
            <nav className="custom-navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-brand">
                        GLANCE
                    </Link>
                </div>

                <form>
                    <div className="wrapper">
                        <input className="input-search"
                            type="text"
                            id="search"
                            placeholder="Поиск"
                        />
                    </div>
                </form>

                <span className="navbar-menu">
                    <div className="dropdown">
                        <Link to="/catalog">
                            <img
                                className="menu-link"
                                src={Catalog_Icon}
                                alt="catalog"
                            />
                            Каталог
                        </Link>
                        <div className="dropdown-content">
                          <Link to="/catalog/smartphones">Смартфоны</Link>
                          <Link to="/catalog/smartspeakers">Колонки</Link>
                        </div>
                      </div>
                    <Link to="/cart">
                        <img className="menu-link"
                             src={Basket_Icon}
                             alt="catalog"
                        />
                        Корзина
                    </Link>
                    <Link to="/profile">
                        <img className="menu-link"
                             src={Profile_Icon}
                             alt="catalog"
                        />
                        Профиль
                    </Link>
                </span>
            </nav>
        </header>
    )
}