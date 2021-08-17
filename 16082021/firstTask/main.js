 const generate = (from, to) => {
     return Math.floor(Math.random() * (to - from + 1)) + from;
 }

const onClickGenerateLogin = () => {
    const VALID_ITEMS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const LOG_MIN_LEN = 2;
    const LOG_MAX_LEN = 20;
    const UPPER_CASE = 25;
    const LETTERS_AND_NUMBERS = UPPER_CASE + 1;
    const LoginLength = generate(LOG_MIN_LEN, LOG_MAX_LEN);

    let login = VALID_ITEMS[generate(0, UPPER_CASE)];
    for(let i = 1; i < LoginLength; i += 1){
        const random = generate(LETTERS_AND_NUMBERS, VALID_ITEMS.length-1);
        login = `${ login }${ VALID_ITEMS[random] }`;
    }

    const randView = document.querySelector('.rand-login');
    randView.innerText = login;
    console.log(login);console.log(LoginLength);
}

document.querySelector('.rand-login-gen').addEventListener('click', onClickGenerateLogin);