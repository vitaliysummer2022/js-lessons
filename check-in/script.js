document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelectorAll('input');

    if (!/^[a-z'-\s]+$/i.test(input[0].value)) {
        showAlert('Error in "Full name" field');
    } else if (!/^js-\d{3}$/i.test(input[1].value)) {
        showAlert('Error in "Flight" field');
    } else if (!/^[be]$/i.test(input[2].value)) {
        showAlert('Error in "Class" field');
    } else {
        showAlert('Check-in has been completed', 'success');
    }
});



// Alert
function showAlert(text, success) {
    if (document.querySelector('.alert')) {
        document.querySelector('.alert').remove();
    }

    document.body.insertAdjacentHTML('beforeend', 
    `<div class="alert alert-err">
        <p>${text}</p>
        <button class="btn-close"></button>
    </div>`);

    const alert = document.querySelector('.alert');
    if (success) {
        alert.classList.remove('alert-err');
    }
    document.querySelector('.btn-close').addEventListener('click', () => alert.remove());
}

document.querySelector('form').addEventListener('input', () => {
    if (document.querySelector('.alert')) {
        document.querySelector('.alert').remove();
    }
});