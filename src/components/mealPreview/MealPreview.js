import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FetchMealById } from '../../services/mealtService';
import './index.css';

const MealPreview = ({ meal }) => {
    const [mealDetails, setMealDetails] = useState(null);

    const fetchMealDetails = async () => {
        const details = await FetchMealById(meal.idMeal);
        setMealDetails(details);
    };

    return (
        <div className='meal-preview'>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <Link to={`/meal/${meal.idMeal}`} onClick={fetchMealDetails}>
                <button>Detalles</button>
            </Link>
        </div>
    );
};

export default MealPreview;

