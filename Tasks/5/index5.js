document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded and parsed");

    function onClick(e) {
        const price = [100, 200, 300];
        const item = document.getElementById('select');
        const count = document.getElementById('Count');
        let result = document.getElementById('result');
        if (/^\d+$/.test(count.value)) {
            result.value = price[item.value] * count.value + '$';
        } else {
            alert('для ввода доступны только числа');
        }
        e.preventDefault();
    }

    const btn = document.getElementById('button');
    btn.addEventListener('click', onClick);
});


