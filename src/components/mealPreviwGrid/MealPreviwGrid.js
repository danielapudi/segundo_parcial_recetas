import React, { useState, useEffect } from 'react';
import { FetchMealByFirstLetter } from '../../services/mealtService';
import './index.css';

const MealPreviwGrid = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            const meals = await FetchMealByFirstLetter();
            setMeals(meals);
        };

        fetchMeals();
    }, []);

    return (
        <div className='meal-grid'>
            {meals.map(meal => (
                <img key={meal.idMeal} src={meal.strMealThumb} alt={meal.strMeal} />
            ))}
        </div>
    );
};

export default MealPreviwGrid;

