document.addEventListener('DOMContentLoaded', function() {

let dropDown = document.querySelector('.header__bottom__arrow');
let dropDownList = document.querySelector('.header__dropdown__list');

dropDown.addEventListener('click',function(){

    dropDownList.classList.toggle('active');

});


let search = document.querySelector('.header__bottom__search');
let searchForm = document.querySelector('.header__bottom__form');

search.addEventListener('click', function(){

    searchForm.classList.toggle('form__active')

});

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__bottom__list');

burger.addEventListener('click', function(){

    burger.classList.toggle('active-burger')
    menu.classList.toggle('header__menu')

});

ymaps.ready(init);
function init (){
    var myMap = new ymaps.Map("map", {
        center: [54.16123457045901,37.58554749999999],
        zoom: 12
    });
    var myPlacemark = new ymaps.Placemark([54.16123457045901,37.58554749999999], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-pin.svg',
        iconImageSize: [35, 43],
        iconImageOffset: [-3, -42]
    });
    myMap.geoObjects.add(myPlacemark);
    };
    
});    