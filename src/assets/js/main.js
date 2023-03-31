import modals from "./modules/modals.js";
import sliders from "./modules/sliders.js";
import forms from "./modules/forms.js";
import mask from "./modules/mask.js";
import checkTextInputs from "./modules/checkTextInputs.js";
import showMore from "./modules/showMore.js";
import calc from "./modules/calc.js";
import filter from "./modules/filter.js";
import picturesSize from "./modules/picturesSize.js";
import accordion from "./modules/accordion.js";
import burger from "./modules/burger.js";
import scrolling from "./modules/scrolling.js";

window.addEventListener('DOMContentLoaded', () => {
    modals();
    sliders('.feedback-slider-item', false, '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', true);
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMore('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    picturesSize('.sizes-block');
    accordion('.accordion-heading');
    burger('.burger-menu', '.burger');
    scrolling('.pageup');
});
