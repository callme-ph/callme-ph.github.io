document.addEventListener('DOMContentLoaded', function () {

    const createPostBtn = document.getElementById('#post_button');
    
    const postContainer = document.querySelector('.content'); 
    const postForm = document.getElementById('newpost_form'); 
    
    postForm.addEventListener('submit', function (event) {
		event.preventDefault();

        const postTitle = document.getElementById('post_title').value; 
        const postDescription = document.getElementById('post_text').value;

    //alert("Entrou na função submit");

    const newPost = document.createElement('div'); 
		newPost.className = 'new_post'; 
		newPost.innerHTML = `
        <h1 class="post-title"> ${postTitle}</h1><br>

        <p class="post-description">
        ${postDescription.substring(0, 1000)}</p>`;

        //alert('Passou do new post');

        postContainer.insertBefore(newPost, postContainer.firstChild); 

		// Reset the form 
		postForm.reset(); 
        //alert('Form reset');
    })
})