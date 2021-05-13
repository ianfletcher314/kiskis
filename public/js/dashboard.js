const newFormHandler = async (event) => {
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

const editButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/secrets/${id}`, {
      method: 'PUT',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to edit secret');
    }
  }
};


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

document
  .querySelectorAll('.delete-secret')
  .forEach((element) => {
    element.addEventListener('click', delButtonHandler);
  })


  document
  .querySelectorAll('.edit-secret')
  .forEach((element) => {
    element.addEventListener('click', editButtonHandler);
  })



const secretForm = document
  .querySelector('.new-secret-form')
if (!!secretForm) {
  secretForm.addEventListener('submit', newFormHandler)
}


