describe('HuntingPony', function () {
    it('Sell test', function () {
         cy.visit('https://huntingpony.com/');
         cy.get('[href="/collection/lezhanki"] > .img-ratio_cover > :nth-child(1) > .img-ratio > .img-ratio__inner > picture > .loaded').click();
         cy.get('[data-product-id="338933592"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
         cy.get('.add-cart-counter__btn').click();
         cy.get('[data-add-cart-counter-plus=""]').click();
         cy.get('.header__cart').click();
         cy.get('.cart-controls > .button').click();
         cy.get('#client_surname').type('Иванов');
         cy.get('#client_contact_name').type('Иван');
         cy.get('#client_phone').type('+79283162372');
         cy.get('#client_email').type('fda@yandex.ru');
         cy.get('#shipping_address_full_locality_name').click();
         cy.get('[for="order_delivery_variant_id_4754130"] > .radio > span').click();
         cy.get('#shipping_address_street').type('Ленина');
         cy.get('#shipping_address_house').type('99');
         cy.get('#shipping_address_flat').type('23');
         cy.get('[for="order_payment_gateway_id_2976642"] > .co-payment_method-input > span').click();
         cy.get('#checkout_buyer_fields > .co-input--required > .co-input-select > .co-input-field').select('Мальчик');
         cy.get('#order_field_24333471').type('Корги');
         cy.get('#order_field_24333473').type('04.04.2023');
         cy.get('#create_order').click();
         cy.contains('Заказ успешно оформлен. В течение нескольких секунд вы будете перенаправлены на страницу оплаты.');
     })
 })