const generate = (from, to) => {
    return Math.floor(Math.random() * (to - from + 1)) + from;
}

const onClickGenerateLogin = () => {
    const VALID_ITEMS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_-+=';
    const LOG_MIN_LEN = 8;
    const LOG_MAX_LEN = 12;
    const PasswordLength = generate(LOG_MIN_LEN, LOG_MAX_LEN);
    let isUpper, isLower, isNumbers, isSpecial;
    let login;
    do {
        login = '';
        isUpper, isLower, isNumbers, isSpecial = false;
        for (let i = 0; i < PasswordLength; i += 1) {
            const random = generate(0, VALID_ITEMS.length - 1);
            login = `${login}${VALID_ITEMS[random]}`;
            if (random <= 25 && isUpper != true) {
                isUpper = true;
            }
            if (random > 25 && random <= 51 && isLower != true) {
                isLower = true;
            }
            if (random > 51 && random <= 61 && isNumbers != true) {
                isNumbers = true;
            }
            if (random > 61 && random <= 76 && isSpecial != true) {
                isSpecial = true;
            }
        }
    } while (!(isUpper && isLower && isNumbers && isSpecial));

    const randView = document.querySelector('.rand-login');
    randView.innerText = login;
    console.log(login);
}

document.querySelector('.rand-login-gen').addEventListener('click', onClickGenerateLogin);