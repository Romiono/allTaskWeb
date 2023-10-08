document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded and parsed");
});

const obj = {
    1: 100,
    2: 200,
    3: 300
}

function onClick(e) {
    const item = document.getElementById('select')
    const count = document.getElementById('Count')
    let result = document.getElementById('result')
    result.value = obj[item.value] * count.value + '$'
    e.preventDefault()
}
const btn = document.getElementById('button')
btn.addEventListener('click', onClick)
