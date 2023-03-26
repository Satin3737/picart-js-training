const modals = () => {
    let isSomeModalOpen = false;

    const bindModal = (triggerSelector, modalSelector, closeSelector, destroy = false) => {
        const triggers = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = modal.querySelector(closeSelector);
        const modalArray = document.querySelectorAll('[data-modal]');

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                
                isSomeModalOpen = !isSomeModalOpen;
                
                if (destroy) {
                    trigger.remove();
                }
                
                closeAllModals(modalArray);
                openModal(modal);
            });
        });

        close.addEventListener('click', () => {
            closeAllModals(modalArray);
            closeModal(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeAllModals(modalArray);
                closeModal(modal);
            }
        });
    }
    
    function closeAllModals(modalArray) {
        modalArray.forEach(modal => {
            closeModal(modal);
            modal.classList.add('animated', 'fadeIn');
        });
    }

    function openModal(modal) {
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
        document.body.style.marginRight = `${calcScrollbar()}px`;
    }

    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        document.body.style.marginRight = '0';
    }

    function showModalByTime(modalSelector, time) {
        setTimeout(() => {
            const modal = document.querySelector(modalSelector);
            let display = false;
            
            document.querySelectorAll('[data-modal]').forEach(modal => {
                if (getComputedStyle(modal).display !== 'none') {
                    display = !display;
                }
            });
            
            if (!display) {
                openModal(modal);
            }
            
        }, time);
    }
    
    function calcScrollbar() {
        let div = document.createElement('div');
        
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        
        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        
        return scrollWidth;
    }
    
    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            if (!isSomeModalOpen && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1)) {
                document.querySelector(selector).click();
            }
        });
    }
    
    bindModal('.button-design', '.popup-design', '.popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    openByScroll('.fixed-gift');
    showModalByTime('.popup-consultation', 60000);
    
}

export default modals;