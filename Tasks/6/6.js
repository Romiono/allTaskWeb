const list = {
    defPrice: [1000, 2000, 3000],
    radio: {
        0: 3,
        1: 4,
        2: 5
    },
    check: 1237
}


function ubdate() {
    console.log('changed')
    let select = document.getElementById('select')
    let result = 0;
    let radioD = document.getElementById('radios')
    let checkD = document.getElementById('checkD')

    switch (select.value) {
        case '0':
            radioD.style.display = 'block'
            checkD.style.display = 'flex'
            result = list.defPrice[Number(select.value)]
            break
        case '1':
            radioD.style.display = 'block'
            checkD.style.display = 'none'
            result = list.defPrice[Number(select.value)]
            break
        case '2':
            radioD.style.display = 'none'
            checkD.style.display = 'flex'
            result = list.defPrice[Number(select.value)]
            break
        default:
            alert('нет таких значений')
    }


    let radio = document.getElementsByName('myradio')
    radio.forEach(e => {
        if (radioD.style.display === 'block'){
            if (e.checked) {
                let price = list.radio[e.value]
                result *= price
            }
        }
    })

    let check = document.getElementById('checkbox')

    if(checkD.style.display === 'flex')if(check.checked) {
        result += list.check
    }

    let endPrice = document.getElementById('result')
    endPrice.value = result
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded and parsed")
    let select = document.getElementById('select')
    select.addEventListener('change', ubdate)

    let radio = document.getElementsByName('myradio')
    radio.forEach(e => {
        e.addEventListener('change', ubdate)
    })

    let check = document.getElementById('checkbox')
    check.addEventListener('change', ubdate)

});

ubdate()
