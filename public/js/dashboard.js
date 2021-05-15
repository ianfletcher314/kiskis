const newSecretHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#secret-title').value.trim();
  const body = document.querySelector('#secret-body').value.trim();

  if (title && body) {
    const response = await fetch(`/api/secrets`, {
      method: 'POST',
      body: JSON.stringify({ title, body }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create secret');
    }
  }
};

//can move into edit URL
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/secrets/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete secret');
    }
  }
};

//delete secret
document.querySelectorAll('.delete-secret')
  .forEach((element) => {
    element.addEventListener('click', delButtonHandler);
  })


//create secret
const secretForm = document
  .querySelector('.new-secret-form')
if (!!secretForm) {
  secretForm.addEventListener('submit', newSecretHandler)
}

const cardButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    document.querySelector('.secret-body').innerHTML = 'loading...'
    const response = await fetch(`/api/secrets/${id}`)
    // .then(function (response) {
    //   return response.json();
    // })

    if (response.ok) {
      const secretData = await response.json()
      console.log(secretData);
      document.querySelector('#secret-title').innerHTML = secretData.title
      document.querySelector('.secret-body').innerHTML = secretData.body
      document.querySelector('#edit-button').href =  `/dashboard/edit/${secretData.id}`
      document.querySelector('#delete-secret-button').dataset.id = secret.id
    } else {
      document.querySelector('.secret-body').innerHTML = 'An error happened';
    }
  }
}

document.querySelector('.secret-title-cards')
 .addEventListener('click', cardButtonHandler);

