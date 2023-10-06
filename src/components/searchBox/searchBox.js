import React, { useState, useEffect } from 'react';
import {SearchMealByName} from '../../services/mealtService';
import SearchIcon from './searchIcon';
import './index.css';

const SearchBox = () => {
    const [meals, setMeals] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = async () => {
        const meals = await SearchMealByName(searchTerm);
        setMeals(meals);
    };

    return (
        <div className="search-box">
            <SearchIcon />
            <input
                type="text"
                placeholder="Busca en este sitio web"
                value={searchTerm}
                onChange={handleChange}
            />
            <button onClick={handleSearch}>Buscar</button>
            {meals.length > 0 && (
                <mealPreviwGrid meals={meals} />
            )}
        </div>
    );
};

export default SearchBox;

