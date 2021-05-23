// NOTE I FORGOT THAT THIS IS FRONTEND JAVASCRIPT SO CONSOLE LOG GOES TO BROWSER

const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment_text = document.querySelector('#comment').value.trim();

  // grab the post_id from the URL.  JS doesn't have reverse lookup so get length
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length-2
  ];

  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_text,
        user_id: 1  // this will have to come from the session I guess
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace(`/post/${post_id}`);
    } else {
      alert(response.statusText);
    }
  }  
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);