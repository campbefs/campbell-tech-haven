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
  if (password.length <4 ) {
    alert("Password must be 4 characters");
    return;
  }
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
      setTimeout(loginFormHandler(event),5000); // if signup is OK then login
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".signup-form").addEventListener('submit', signupFormHandler);