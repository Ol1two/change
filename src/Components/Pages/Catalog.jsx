import { useParams,  } from 'react-router-dom'
import { useState, } from 'react'
import products from '../ProdactCard/Products.js'
import ProductCard from "../ProdactCard/ProdactCard.jsx"
import Filters from "../Pages/Filter-for-Catalog.jsx"
import "./CSS-for-pages/Styles-for-Catalog.css"


export default function Catalog( ) {
    const { category: urlCategory } = useParams() // Получаем параметры из URL
    const [filters, setFilters] = useState({
        brand: [],
        memory: [],
        ram: [],
        sort: 'popularity',
        viewType: 'grid',
    });


    const handleFilterChange = (filterCategory, filterValue) => {
        setFilters(prevFilters => {
            if (filterCategory === 'sort' || filterCategory === 'viewType') {
                return { ...prevFilters, [filterCategory]: filterValue }
            } else {
                const newFilterValues = prevFilters[filterCategory].includes(filterValue)
                    ? prevFilters[filterCategory].filter(value => value !== filterValue)
                    : [...prevFilters[filterCategory], filterValue];
                return { ...prevFilters, [filterCategory]: newFilterValues }
            }
        });
    };

    // Фильтруем продукты по категории и бренду, если они заданы
    const filteredProducts = products.filter(product => {
        const matchesCategory = !urlCategory || product.category === urlCategory
        const matchesBrand = !filters.brand.length || filters.brand.includes(product.subcategory.toLowerCase())
        const matchesMemory = !filters.memory.length || filters.memory.includes(product.memory)
        const matchesRam = !filters.ram.length || filters.ram.includes(product.ram)
        return matchesCategory && matchesBrand && matchesMemory && matchesRam
    });

    // Добавьте логику сортировки в зависимости от sortCriteria
    const sortedProducts = filteredProducts.sort((a, b) => {
        if (filters.sort === 'price') {
            return parseFloat(a.price) - parseFloat(b.price)
        }
        if (filters.sort === 'memory') {
            return parseFloat(b.memory) - parseFloat(a.memory)
        }
        if (filters.sort === 'ram') {
            return parseFloat(b.ram) - parseFloat(a.ram)
        }
        return 0
    });

    let catalogTitle = "Каталог";

    if (urlCategory) {
        catalogTitle += ` ${urlCategory}`;
    }

    return (
        <div className="catalog-container">
            <h2>{catalogTitle}</h2>
            <div className="catalog-view">
                <div className="filters">
                    <Filters filters={filters} onFilterChange={handleFilterChange}/>
                </div>
                <div className={`products-container ${filters.viewType}`}>
                    <ul>
                        {sortedProducts.map(product => (
                            <li key={product.name}>
                                <ProductCard product={product}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

