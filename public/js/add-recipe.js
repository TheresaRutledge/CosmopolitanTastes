async function newRecipeSubmitHandler(event) {

    event.preventDefault();
    

    const title = document.querySelector('#recipe-title').value.trim();
    const picture = document.querySelector('#recipe-image').files[0];
    const ingredients = document.querySelector('#recipe-ingredients').value.trim();
    const instructions = document.querySelector('#recipe-directions').value.trim();
    const fd = new FormData();
    fd.append('recipeImage',picture)
    fd.append('recipe', JSON.stringify({
        title,instructions,ingredients
    }))


    if(title && picture && ingredients && instructions){
        const response = await fetch('/api/recipes',{
            method: 'POST',
            body: fd,
        });
        if (response.ok){
            document.location.replace('/');
        } else {
            alert(response.statusText)
        }
    } else {
        alert('All fields must have an entry');
    }
    console.log(picture);
}

document.querySelector('.new-recipe').addEventListener('submit', newRecipeSubmitHandler);
