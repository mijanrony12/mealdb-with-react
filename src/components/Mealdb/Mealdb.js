import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Mealdb = () => {
    const [ meals, setMeals ] = useState([])
    
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(res => res.json())
        .then(data=> setMeals(data.meals))
    },[])
    return (
        <div class="row">
            <div className="col-md-9">
                <div className="row">
                       {
                meals.map(meal => <Meal
                    key={meal.idMeal}
                  meal={meal}
                >
                     
                 </Meal>)
               }
                   </div>
           </div>
            <div className="col-md-3">
                  <h1>this card</h1>
           </div>
        </div>
    );
};

export default Mealdb;