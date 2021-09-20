const panels = document.querySelectorAll(".panel");
console.log(panels);

panels.forEach(function(panel){
    
    panel.addEventListener('click', function(){
        removeActiveClasses();
        panel.classList.add('active');
    });
});
function removeActiveClasses(){
    panels.forEach(function(activePanel){
        activePanel.classList.remove('active');
    });

}