const editPostHandler = async (event) => {
  event.preventDefault();

  console.log('guy');

  const title = document.querySelector('#create-title').value.trim();
  const body = document.querySelector('#content').value.trim();

  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length-1
  ];

  console.log(title, body, post_id);

  if (title && body) {
    const response = await fetch(`/api/posts/${post_id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        body
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

const deleteHandler = async (event) => {
  event.preventDefault();

  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length-1
  ];

  const response = await fetch(`/api/posts/${post_id}`, {
    method: 'DELETE',
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

document.querySelector('.edit-form').addEventListener('submit', editPostHandler);
document.querySelector('.delete').addEventListener('click', deleteHandler);
