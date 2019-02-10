

const button = document.getElementById('button');

button.addEventListener('click', loadPhones);

function loadPhones() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'phones.json', false);

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;

        button.innerHTML = 'Готово!';

        if (xhr.status != 200) {
            // обработать ошибку
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            try {
                const phones = JSON.parse(xhr.resposeText);
                console.log(xhr);
            } catch (err) {
                alert('Error answer: ' + err.message);
            }
        } showPhones(phones);

    }

    xhr.send();

    button.innerHTML = 'Загружаю...';
    button.disabled = true;
}

function showPhones(phones) {
phones.forEach(phone => { 
    const li = list.appendChild(document.createElement('li'));
    li.innerHTML = phone.name;
});
}