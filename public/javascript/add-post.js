const newPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#create-title').value.trim();
  const body = document.querySelector('#content').value.trim();

  if (title && body) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        user_id: 1 // replace
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