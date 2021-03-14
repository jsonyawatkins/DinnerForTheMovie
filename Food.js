//Grabbing elements
let search = document.getElementById('search'),
    submit = document.getElementById('submit'),
    recipeName = document.getElementById('recipeName'),
    directions = document.getElementById('directions'),
    needed = document.getElementById('needed'),
    one = document.getElementById('one'),
    two = document.getElementById('two'),
    three = document.getElementById('three');
    submit.addEventListener('click', getRecipe)
    
//    Pasted from postman
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "__cfduid=dc011440f0d8528f0be8ee4691c0bde141615701161");
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    

    // Function linked to API returning 3 ingredients for recipe & directions
    function getRecipe(e) {
        e.preventDefault();
        let recipe = search.value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`, requestOptions)
      .then(response => response.json())
      .then(result => {
          console.log(result)
          recipeName.innerHTML = result.meals[0].strMeal;
          directions.innerHTML = result.meals[0].strInstructions;
          one.innerHTML = result.meals[0].strIngredient1;
          two.innerHTML = result.meals[0].strIngredient2;
          three.innerHTML = result.meals[0].strIngredient3;
          needed.style.visibility = 'visible';
      })
      .catch(error => console.log('error', error));
      }

