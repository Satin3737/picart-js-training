import modals from "./modules/modals.js";
import sliders from "./modules/sliders.js";
import forms from "./modules/forms.js";
import mask from "./modules/mask.js";
import checkTextInputs from "./modules/checkTextInputs.js";
import showMore from "./modules/showMore.js";

window.addEventListener('DOMContentLoaded', () => {
    modals();
    sliders('.feedback-slider-item', false, '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', true);
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMore('.button-styles', '#styles .row');
});
