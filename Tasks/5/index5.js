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
    if (/^\d+$/.test(count.value)) {
        result.value = obj[item.value] * count.value + '$'
    }
    else {
        alert('для ввода доступны только числа')
    }
    e.preventDefault()
}
const btn = document.getElementById('button')
btn.addEventListener('click', onClick)
