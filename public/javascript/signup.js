const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  // create login route first
  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: {'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

const signupFormHandler = async (event) => {
  event.preventDefault();

  console.log('clicked!');

  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  console.log(username, ' ', password);

  // signup route and then login route
  if (username && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: {'Content-Type': 'application/json'}
    });

    if (response.ok) {
      loginFormHandler(event); // if signup is OK then login
      console.log('you did it!');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".signup-form").addEventListener('submit', signupFormHandler);