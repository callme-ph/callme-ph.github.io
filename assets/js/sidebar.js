var button = document.querySelector('#sidebar_button')
var div = document.querySelector('.sidebar')
var close = document.querySelector('#close_sidebar') 

button.addEventListener('click', function() {

    if(div.style.display === 'none'){
        div.style.display = 'flex';
        button.style.display = 'none';
    } else {
        div.style.display = 'none';
    }

});

close.addEventListener('click', function(){
    
    if(div.style.display === 'flex'){
        div.style.display = 'none';
        button.style.display = 'flex';
    }
});
