const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

currentActive = 1;
next.addEventListener('click', ()=>{
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    else{
        // console.log(currentActive);
        update();
        button();
    }
});

prev.addEventListener('click', ()=>{
    currentActive--;
    // console.log(currentActive);
    if(currentActive <1){
        currentActive = 1;
    }
    else{
        // console.log(currentActive);
        update();
        button();
    }
});

function button(){
    if(currentActive === 1){
        prev.disabled = true;
    }
    else if(currentActive === circles.length){
        next.disabled = true;
    }
    else{
        prev.disabled = false;
        next.disabled = false;
    }

}
function update(){
    circles.forEach((circle, index)=>{
        // console.log(circle);
        if(index < currentActive){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
    });
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1 ) / (circles.length - 1 ) * 100 + '%';

    // progress.style.width
    console.log(actives.length);
    console.log(circles.length);
    console.log( ((actives.length ) / (circles.length )) * 100 + '%')

}