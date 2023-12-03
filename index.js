const container = document.querySelector('.container');
for(let i = 1; i <= 16; i++){
    for(let i = 1; i <= 16; i++){
    const name = document.createElement('div');
    name.classList.add('grid');
    container.appendChild(name);
    }
}

gridList = document.querySelectorAll('.grid');

gridList.forEach(element => {
    element.addEventListener('mouseover', () =>{
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        element.style.backgroundColor = '#' + randomColor;
    })
});

const button = document.querySelector('#Clear');
button.addEventListener('click',()=>{
    gridList.forEach(element => {
        element.style.backgroundColor = '#cedada';
    });
});
