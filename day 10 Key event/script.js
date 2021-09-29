const insert = document.getElementById('insert')
window.addEventListener('keydown', (e) => {
    insert.innerHTML=` <div class="key">
    ${e.key ===' ' ? 'space' : e.key}
    <small>event.Key</small>
</div>
<div class="key">
${e.keyCode}
    <small>event.KeyCode</small>
</div>
<div class="key">
${e.code}
    <small>event.Code</small>
</div>`
    console.log(e)
})