const filter = () => {
    const buttons = document.querySelectorAll('[data-filter-btn]');
    const allPhotos = document.querySelectorAll('[data-filter-photo]');
    const noPhoto = document.querySelector('[data-filter-none]');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            btn.classList.add('active');
            
            const type = btn.dataset.filterBtn;
            type === 'all' ? typeFilter(allPhotos) : typeFilter(document.querySelectorAll(`[data-filter-photo="${type}"]`));
        });
    });
    
    function typeFilter(markType) {
        allPhotos.forEach(photo => {
            hideElem(photo)
        });
        hideElem(noPhoto);
        
        if (markType.length > 0) {
            markType.forEach(mark => showElem(mark));
        } else {
            showElem(noPhoto);
        }
    }
    
    function showElem(elem) {
        elem.style.display = 'block';
        elem.classList.add('animated', 'fadeIn');
    }
    
    function hideElem(elem) {
        elem.style.display = 'none';
        elem.classList.remove('animated', 'fadeIn');
    }
    
}

export default filter;