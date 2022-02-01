let color = document.querySelectorAll('.text_color');
let text = document.querySelector('.text');
text.classList.add('effet')


color.forEach(item =>{
    console.log(item)
    item.addEventListener('mouseover' ,()=>{
        console.log('hello')
            item.classList.toggle('hover_text');
           setTimeout(remove_class ,200)
    })
    function remove_class(){
        item.classList.toggle('hover_text');
    }
})

//changement de couleur 
