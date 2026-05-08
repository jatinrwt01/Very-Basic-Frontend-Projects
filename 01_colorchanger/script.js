const btns = document.querySelectorAll('.button');

btns.forEach((button) =>{
    button.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    if(e.target.id == 'grey'){
        document.body.style.backgroundColor = 'grey';
    }
    if(e.target.id == 'white'){
        document.body.style.backgroundColor = 'white';
    }
    if(e.target.id == 'blue'){
        document.body.style.backgroundColor = 'blue';
    }
    if(e.target.id == 'yellow'){
        document.body.style.backgroundColor = 'yellow';
    }
    });
});