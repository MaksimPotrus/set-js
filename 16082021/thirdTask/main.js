
const random_mix = (str) => {
    let temp = str.repeat(1);
    temp = temp.split('').sort(function () { return 0.5 - Math.random() }).join('');
    return temp;
}
const onClickGenerateLogin = () => {
    const randView = document.querySelector('.rand-login');
    randView.innerText = random_mix("Write a function that takes an array of primitive values, makes a copy of it, interferes with the copy at random, and returns it from the function.");
}

document.querySelector('.rand-login-gen').addEventListener('click', onClickGenerateLogin);