const panels = document.querySelectorAll('.panel');


panels.forEach((panel)=>{
    panel.addEventListener('click', function(){
        removeActiveClass();
        panel.classList.add('active');
    });
});

function removeActiveClass(){
    panels.forEach((activePanel)=>{
        activePanel.classList.remove('active');
    });
}

