export const hideAlert = () => {
    const el = document.querySelector('.alert');
    if (el) {
        el.parentElement.removeChild(el);
    }
}

// type is 'success' or 'error'
export const showAlert = (type, message, time = 5) => {
    hideAlert();
    const markup = `<div class="alert alert--${type}">${message}</div>`;
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
    window.setTimeout(hideAlert, time * 1000);
};

export const showLocalError = (message, element) => {
    const markup = `<div class="alert-local alert--error">${message}</div>`;
    element.insertAdjacentHTML('afterbegin', markup);
}