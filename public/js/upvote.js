async function voteHandler(event) {   
  event.preventDefault();
//confirmed this function is called on button click

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ]

  //logic error is happening in the fetch
  const response = await fetch('/api/recipes/upvote', {
    method: 'PUT',
    body: JSON.stringify({
      recipe_id: id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  //everything works but the vote_count isn't incremented
  if (response.ok) {
    // document.location.reload();
    console.log('response ok')
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#upvote').addEventListener('click',voteHandler)