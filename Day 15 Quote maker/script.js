const quoteText =  document.getElementById('text')
const quoteAuthor =  document.getElementById('author')
const twitter = document.querySelector('.fa-twitter')
const tumblr = document.querySelector('.fa-tumblr')

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const newQuoteBtn = document.getElementById('new-quote')

newQuoteBtn.addEventListener('click',()=>{
    let hexcolor = '#';

    for(i=0;i<6;i++){
        hexcolor += hex[getrandomNumber()];
    }

    document.body.style.backgroundColor = hexcolor;
    quoteText.style.color = hexcolor;

    newQuoteBtn.style.backgroundColor = hexcolor
    twitter.style.backgroundColor = hexcolor
    tumblr.style.backgroundColor = hexcolor


    generateQuote()
})
function getrandomNumber(){
    return Math.floor(Math.random() * hex.length);
  }
generateQuote()

async function generateQuote(){
    const config = {
        headers:{
            Accept:'application/json',
           
        }
    }
    const method = {
        
    }
    const res = await fetch('https://type.fit/api/quotes',
                            config)
    const data = await res.json()
    const len = data.length
    const randomNum = Math.floor((Math.random() * len) + 1);
    const reterivedQuote = data[randomNum]
    quoteText.innerHTML = reterivedQuote.text
    quoteAuthor.innerHTML =  reterivedQuote.author
    

    console.log(data[randomNum])
    
    
}


