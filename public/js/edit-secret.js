const editButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
    const title = document.querySelector('#secret-title').value.trim();
    const body = document.querySelector('#secret-body').value.trim();
        
    const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/secrets/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, body }),
        headers: {
            'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update secret');
      }
    }
};


document.querySelectorAll('.edit-secret').forEach((element) => {
    element.addEventListener('click', editButtonHandler);
});

const delButtonHandler = async (event) => {
  event.preventDefault();
  
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

