function inputErrorTemplate(msg) {
    return `
    <div class ="invalid-feedback">${msg}</div>`;
}

/**
  * 
  * @param {HTMLInputElement} el 
  */

export function showInputError(el) {
    const parent = el.parentElement;
    const msg = el.dataset.invalidMessage || 'Invalid input';
    const template = inputErrorTemplate(msg);
        // el.classList.add('is-invalid');
        // parent.insertAdjacentHTML("beforeend", template);
    if (!el.classList.contains("is-invalid")){                   
        el.classList.add("is-invalid");
        parent.insertAdjacentHTML("beforeend", template);
    } 
}
export function removeInputError(el) {
    const parent = el.parentElement;
    const err = parent.querySelector('.invalid-feedback');
    if(!err) return;

    el.classList.remove('is-invalid');
    parent.removeChild(err);
}

