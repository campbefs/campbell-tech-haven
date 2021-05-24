const newPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#create-title').value.trim();
  const body = document.querySelector('#content').value.trim();
  const user_id = await document.getElementById('user-id').innerHTML;

  if (title && body) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        user_id: user_id // replace
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.post-form').addEventListener('submit', newPostHandler);