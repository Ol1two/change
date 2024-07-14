import "./CSS-for-pages/Styles-for-Catalog.css";
import PropTypes from "prop-types";

export default function Filters({ filters, onFilterChange }) {
    const handleCheckboxChange = (filterCategory, filterValue) => {
        onFilterChange(filterCategory, filterValue);
    };

    return (
        <div className="filters">
            <h3>Фильтры</h3>

            <div className="filter-group">
                <h4>Бренд</h4>
                {['huawei','apple', 'xiaomi', 'google'].map((brand) => (
                    <div key={brand}>
                        <input
                            type="checkbox"
                            id={brand}
                            checked={filters.brand.includes(brand)}
                            onChange={() => handleCheckboxChange('brand', brand)}
                        />
                        <label htmlFor={brand}>{brand}</label>
                    </div>
                ))}
            </div>

            <div className="filter-group">
                <h4>Память</h4>
                {['32 ГБ', '64 ГБ', '128 ГБ', '256 ГБ'].map((memory) => (
                    <div key={memory}>
                        <input
                            type="checkbox"
                            id={memory}
                            checked={filters.memory.includes(memory)}
                            onChange={() => handleCheckboxChange('memory', memory)}
                        />
                        <label htmlFor={memory}>{memory}</label>
                    </div>
                ))}
            </div>

            <div className="filter-group">
                <h4>Оперативная память</h4>
                {['4 ГБ', '6 ГБ', '8 ГБ'].map((ram) => (
                    <div key={ram}>
                        <input
                            type="checkbox"
                            id={ram}
                            checked={filters.ram.includes(ram)}
                            onChange={() => handleCheckboxChange('ram', ram)}
                        />
                        <label htmlFor={ram}>{ram}</label>
                    </div>
                ))}
            </div>

            <div className="filter-group">
                <h4>Сортировка</h4>
                <select onChange={(e) => handleCheckboxChange('sort', e.target.value)}>
                    <option value="price">По цене</option>
                    <option value="memory">По встроенной памяти</option>
                    <option value="ram">По оперативной памяти</option>
                </select>
            </div>

            <div className="filter-group">
                <h4>Вид</h4>
                <select onChange={(e) => handleCheckboxChange('viewType', e.target.value)}>
                    <option value="grid">Плитка</option>
                    <option value="list">Список</option>
                </select>
            </div>
        </div>
    );
}

Filters.propTypes = {
    filters: PropTypes.shape({
        brand: PropTypes.arrayOf(PropTypes.string),
        memory: PropTypes.arrayOf(PropTypes.string),
        ram: PropTypes.arrayOf(PropTypes.string),
        sort: PropTypes.string,
        viewType: PropTypes.string,
    }).isRequired,
    onFilterChange: PropTypes.func.isRequired,
};