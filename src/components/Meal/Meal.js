import React from 'react';

const Meal = (props) => {
    // console.log(props.meal)
    const {strMealThumb,strMeal,strCategory,strArea,idMeal}=props.meal

    return (
        <div class="col-md-6">
            <div class="card mb-3 p-2" style={{maxWidth: '540px'}}>
            <div class="row g-0">
                <div class="col-md-4">
                <img src={strMealThumb} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="text-center">
                                        <h2 class="card-title">Name:-{ strMeal }</h2>
                                        <h5>ID:-{ idMeal}</h5>
                                        <p>Area:-{ strArea}</p>
                                        <p>Category:-{ strCategory }</p>
                                        <button class="btn btn-primary" onClick={()=>props.handler(props.meal)}> add Name </button>
                </div>
                </div>
        </div>
</div>
        </div>
    );
};

export default Meal;