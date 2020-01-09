import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe";

const App = () => {
  const [loading, setLoading] = useState("Loading....");
  const [counter, setCounter] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [query, setQuery] = useState("chicken");
  const [searchStatus, setSearchStatus] = useState("");
  const APP_ID = ""; 
  const APP_KEY = "";
  const reqUrl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

 
  useEffect(() => {
    setLoading("Loading....")
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    
    const response = await fetch(reqUrl);
    const data = await response.json();
// console.log(data.hits);
    setRecipes(data.hits);
    setLoading("");
    if(data.hits.length > 0) {
      setSearchStatus("");
    }
    if(data.hits.length === 0) {
      setSearchStatus("No result found!");
    }

    
  }
  const handleClick = (event) =>  {
    event.preventDefault();

    setQuery(searchVal);
    setSearchVal("");
  };
let keyCntr = 0;

  return (
    <div className="App">
<h1>{loading}</h1>

     <form onSubmit={handleClick} className="search-form">
       <input type="text" placeholder="search your favourite food"value={searchVal} onChange={(e) => 
         setSearchVal(e.target.value)} className="search-bar"/>
       <button type="button" onClick={handleClick} className="search-button">Search</button>
      
       </form>
<h2>{searchStatus}</h2>
<div className="recipes">
       { recipes.map(recipe =>(<Recipe key={keyCntr++} ingre={recipe.recipe.ingredients} title={recipe.recipe.label} calories={recipe.recipe.calories} img={recipe.recipe.image}/>)
        )}
        </div>
    

    </div>



  );
};
export default App;
