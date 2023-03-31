const accordion = (trigger) => {
    const buttons = document.querySelectorAll(trigger);
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function () {
            const content = this.nextElementSibling;
            this.classList.toggle('active-style');
            content.classList.toggle('active-content');
            
            if (this.classList.contains('active-style')) {
                content.style.maxHeight = (content.scrollHeight + 80) + 'px';
            } else {
                content.style.maxHeight = '0px';
            }
        });
    });
    
}

export default accordion;