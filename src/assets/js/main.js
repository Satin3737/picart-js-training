import modals from "./modules/modals.js";
import sliders from "./modules/sliders.js";

window.addEventListener('DOMContentLoaded', () => {
    modals();
    sliders('.feedback-slider-item', false, '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', true);
});
