
// Отримуємо всі кнопки
const paymentBtn = document.querySelector('.payment-btn');
const extractBtn = document.querySelector('.extract-btn');
const settingsBtn = document.querySelector('.settings-btn');

// Отримуємо всі тексти кнопок
const paymentBtnTxt = document.querySelector('.payment-btn-txt');
const extractBtnTxt = document.querySelector('.extract-btn-txt');
const settingsBtnTxt = document.querySelector('.settings-btn-txt');

// Додаємо слухачів подій на кожну кнопку
paymentBtn.addEventListener('click', function() {
    // Змінюємо колір фону для кнопки "ПЛАТЕЖІ"
    paymentBtn.style.backgroundColor = 'rgb(255, 88, 88)';
    // Змінюємо колір фону для інших кнопок на білий
    extractBtn.style.backgroundColor = 'rgb(255, 230, 230)';
    settingsBtn.style.backgroundColor = 'rgb(255, 230, 230)';
});

extractBtn.addEventListener('click', function() {
    // Змінюємо колір фону для кнопки "ВИПИСКА"
    paymentBtnTxt.style.color = 'rgb(255, 88, 88)'
    extractBtnTxt.style.color = 'white'
    extractBtn.style.backgroundColor = 'rgb(255, 88, 88)';
    // Змінюємо колір фону для інших кнопок на білий
    paymentBtn.style.backgroundColor = 'rgb(255, 230, 230)';
    settingsBtn.style.backgroundColor = 'rgb(255, 230, 230)';
    
});

settingsBtn.addEventListener('click', function() {
    // Змінюємо колір фону для кнопки "НАЛАШТУВАННЯ КАРТКИ"
    extractBtnTxt.style.color = 'rgb(255, 88, 88)'
    settingsBtnTxt.style.color = 'white'
    settingsBtn.style.backgroundColor = 'rgb(255, 88, 88)';
    // Змінюємо колір фону для інших кнопок на білий
    paymentBtn.style.backgroundColor = 'rgb(255, 230, 230)';
    extractBtn.style.backgroundColor = 'rgb(255, 230, 230)';
});

var element = document.getElementById('phone');
var maskOptions ={
    mask: '+380 (XX) XXX-XX-XX',
    lazy: false
}
var mask = new IMask(element,maskOptions);
