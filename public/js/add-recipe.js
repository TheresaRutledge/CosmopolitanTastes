async function newRecipeSubmitHandler(event) {
    console.log('entered function')
    event.preventDefault();
    

    const title = document.querySelector('#recipe-title').value.trim();
    const picture = document.querySelector('#recipe-image').value.trim();
    const ingredients = document.querySelector('#recipe-ingredients').value.trim();
    const instructions = document.querySelector('#recipe-directions').value.trim();

    if(title && picture && ingredients && instructions){
        const response = await fetch('/api/recipes',{
            method: 'POST',
            body: JSON.stringify({
               picture,
               title,
               instructions,
               ingredients
            }),
            headers: {'Content-Type' : 'application/json'}
        });
        if (response.ok){
            document.location.replace('/');
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector('.new-recipe').addEventListener('submit', newRecipeSubmitHandler);
