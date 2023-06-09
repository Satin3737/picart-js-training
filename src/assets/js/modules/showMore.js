import {getData} from "../services/requests.js";

const showMore = (trigger, wrapper) => {
    const button = document.querySelector(trigger);
    
    button.addEventListener('click', () => {
        getData('./db.json')
            .then(createCards);
        
        button.remove();
    });
    
    function createCards(response) {
        response.styles.forEach(({src, title, link}) => {
            let card = document.createElement('div');
            card.classList.add('animated', 'fadeIn', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            card.innerHTML = `
                <div class=styles-block>
                    <img src="${src}" alt="${title}">
                    <h4>${title}</h4>
                    <a href="${link}">Подробнее</a>
                </div>
            `;
            document.querySelector(wrapper).appendChild(card);
        });
    }
}

export default showMore;