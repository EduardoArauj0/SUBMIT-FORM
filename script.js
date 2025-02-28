const button = document.querySelector('button');

const addLoading = () => {
    button.innerHTML = '<img src="./loading.png" class="loading">';
}

const removeLoading = () => {
    button.innerHTML = 'Enviar';
}

const handleSubmit = (event) => {
    event.preventDefault();
    addLoading();

    const name = document.querySelector('input[name=name]').value;
    const email = document.querySelector('input[name=email]').value;

    fetch('https://api.sheetmonkey.io/form/vAKdi9LTkJUsBGQZrEGQcH', {
        method: 'post',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify ({name, email}),
    }).then(() => removeLoading());
}

document.querySelector('form').addEventListener('submit', handleSubmit);