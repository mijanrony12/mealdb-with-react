import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Mealdb.css';

const Mealdb = () => {
    const [ meals, setMeals ] = useState([])
    const [ cart, setCart ] = useState([])
    const [displayMeal, setDisplayMeal]=useState([])
    
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(res => res.json())
            .then(data => {
                setMeals(data.meals)
                setDisplayMeal(data.meals)
            })
    }, [])
    const clickHandler = (meal) => {
        const newCount = {...cart, meal}
        setCart(newCount.meal)
    }
    const searchHandle = (event) => {
        const searchText = event.target.value;
        const filterMeal = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayMeal(filterMeal)
    }
    return (
        <div>
              <div className="search-container">
                <div className="search">
                     <input  onChange={searchHandle} type="text" placeholder="Search Your Item" />
                   </div>
        </div>
              <div class="row ">
            <div className="col-md-9">
                <div className="row">
                                        {
                                    displayMeal.map(meal => <Meal
                                        key={ meal.idMeal }
                                        handler={clickHandler}
                                    meal={meal}
                                    >
                                        
                                    </Meal>)
                                }
                   </div>
           </div>
            <div className="col-md-3">
                     <Cart name={cart.strMeal}></Cart>
           </div>
        </div>
      </div>
    );
};

export default Mealdb;