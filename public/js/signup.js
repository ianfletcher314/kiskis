
  const signUpFromHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#user-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    
    if(email && password && name) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({email, name, password}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }    
}
document
.querySelector('.signup-form')
.addEventListener('submit', signUpFromHandler);
