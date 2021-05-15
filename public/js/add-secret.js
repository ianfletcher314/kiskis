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
  
  
  const secretForm = document
    .querySelector('.new-secret-form')
  if (!!secretForm) {
    secretForm.addEventListener('submit', newSecretHandler)
  }