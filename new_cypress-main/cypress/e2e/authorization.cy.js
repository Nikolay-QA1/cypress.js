
describe('Автотесты на авторизацию', function () {
    it('Верный логин, верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon');       
     })
 })
 




 
describe('Автотесты на авторизацию', function () {
    it('Логика востановления пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click();
         cy.get('#mailForgot').type('niasdfkjh@yandex.ru');
         cy.get('#restoreEmailButton').click();
         cy.contains('Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton > .exitIcon');
     })
 })






 describe('Автотесты на авторизацию', function () {
    it('Неправильный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio2');
         cy.get('#loginButton').click();
         cy.contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon');
     })
 })
 




 describe('Автотесты на авторизацию', function () {
    it('Неправильный логин', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikovv.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon');
     })
 })





 describe('Автотесты на авторизацию', function () {
    it('Неправильный логин без собачки', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('germandolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Нужно исправить проблему валидации');
         cy.get('#exitMessageButton > .exitIcon');
     })
 })





 describe('Автотесты на авторизацию', function () {
    it('Строчные буквы в логине', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('GerMan@Dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon');
     })
 })