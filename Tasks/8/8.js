
const btn = document.getElementById('btn');
const popUp = document.getElementById('pop-up');
const form = document.getElementById('form')
const submit = document.getElementById('submit')

function closePopUp() {
    popUp.style.display = 'none';
    btn.style.display = 'block';
    history.back();
}

async function post(user) {
     let response = await fetch('https://formcarry.com/s/7tnYmlnO75', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    });

    let result = await response.json();
    alert(result.message);
}

btn.addEventListener('click', () => {
    popUp.style.display = 'flex';
    btn.style.display = 'none';
    history.pushState({form: 'form'}, 'Title', '?form.html');
})

popUp.addEventListener('click', (e) => {
    closePopUp();
    e.preventDefault();
})

window.addEventListener('popstate', () => {
    closePopUp();
});

form.addEventListener('click', (e) => {
    e.stopPropagation();
})



submit.addEventListener('click', async (e) => {
    const name = document.getElementById('name')
    const lastName = document.getElementById('first-name')
    const mail = document.getElementById('e-mail')
    const password = document.getElementById('password')
    const any = document.getElementById('any')
    e.preventDefault()
    const user = {
        name: name.value,
        lastName: lastName.value,
        mail: mail.value,
        password: password.value,
        any: any.value
    }
    console.log(user)
    await post(user);
})


