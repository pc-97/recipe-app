import React from "react";
import style from "./recipe.module.css"
const Recipe = ({title, calories, img, ingre}) => {

    return (
        <div className={style.recipe}>
<h1><i>Item: {title}</i></h1>
<h1>Ingredients:</h1>
<ul>

    {ingre.map(ingredient =>  <li>{ingredient.text}</li>
    )}
</ul>
    <p><b>Calories: {calories}</b></p>
            <img className={style.image} src={img} alt={title}/>
            </div>



    );
}


export default Recipe;