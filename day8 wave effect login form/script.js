const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('') /* split the text */
    .map((letter, idx) => `<span
    style="transition-delay:${idx * 50}ms">${letter}</span>`) /* put each letter inside the span of array */
    .join('')/* convert all span to string */
})