const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) =>{
    createtags(e.target.value)

        if(e.key === 'Enter'){
            setTimeout(()=>{
                e.target.value = ''
            }, 10)
            randomSelect()
        }
})

function createtags(input){
    const tags = input.split(',').filter(tag =>tag.trim() !== '').map(tag => tag.trim())
    // input.split()
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
         const tagEl = document.createElement('span')
         tagEl.classList.add('tag')
         tagEl.innerText = tag
         tagsEl.appendChild(tagEl)
    });
}

function randomSelect(){
    const times = 30
    const intervalTime = 100
    const interval = setInterval(() => {
            const randomTag = pickRandomTag()

            highLightTag(randomTag)

            setTimeout(()=>{
                unHighLightTag(randomTag)
            },intervalTime)
    }, intervalTime);

    setTimeout(()=>{
            clearInterval(interval)
            
            setTimeout(()=>{
                const randomTag = pickRandomTag()
                highLightTag(randomTag)
            },intervalTime)
    }, times * intervalTime)
    
}
function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]

}
function highLightTag(tag)
{
    tag.classList.add('highlight')
}
function unHighLightTag(tag)
{
    tag.classList.remove('highlight')
}