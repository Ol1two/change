import CaruselForMainPages from "./Carusel-for-main-pages.jsx";
import CatalogMainPage from "./catalog-main-page.jsx";


export default function Home() {
    return(
        <div className="main-page">
            <CaruselForMainPages />
            <CatalogMainPage />
        </div>
    )
}