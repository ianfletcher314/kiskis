const logout = async (event) => {
  event.preventDefault();
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};


document.querySelector('#logout-button').addEventListener('click', logout);
// document.querySelector('#logout-button-s').addEventListener('click', logout);
