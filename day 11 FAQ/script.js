const faqs = document.querySelectorAll('.faq')
const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach((tog)=>{
// console.log(tog.parentNode)


    tog.addEventListener('click', ()=>{
        tog.parentNode.classList.toggle('active')

    })
        



    })

 