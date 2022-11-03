import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UI from './config/ui.config';
import validate from './helpers/validate';

const { form, inputPassword, inputEmail } = UI;
const inputs = [inputEmail, inputPassword];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    onSubmit();
})

function onSubmit() {
    
}