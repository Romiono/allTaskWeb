const list =[
    {
        model: 'phone',
        price: [1000, 2000, 3000],
    },
    {
        model: 'fix',
        price: [2000, 3000, 4000],
    },
    {
        model: 'laptop',
        price: [3000, 4000, 5000],
    },
]
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded and parsed")
    let select = document.getElementById('select');
    select.addEventListener('change', (e) => {
        console.log('changed')
        let result = document.getElementById('result')
        let selected = e.target
        let radioD = document.getElementById('radios')
        let checkD = document.getElementById('checkbox')
        switch (selected.value) {
            case '0':
                radioD.style.display = 'block'
                checkD.style.display = 'flex'
                result.value = list[Number(selected.value)].price[0]
                break
            case '1':
                radioD.style.display = 'block'
                checkD.style.display = 'none'
                result.value = list[Number(selected.value)].price[0]
                break
            case '2':
                radioD.style.display = 'none'
                checkD.style.display = 'flex'
                result.value = list[Number(selected.value)].price[0]
                break
            default:
                alert('нет таких значений')
        }
    })
    let radio = document.getElementsByName('myradios')
    radio.forEach(addEventListener)
});
