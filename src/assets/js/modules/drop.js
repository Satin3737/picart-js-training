import {cropFileName} from "../services/helper.js";

const drop = () => {
    
    const fileInputs = document.querySelectorAll('[name="upload"]');
    
    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => input.addEventListener(eventName, preventDefaults, false));
    });
    
    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unHighlight(input), false);
        });
    });
    
    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            cropFileName(input);
        });
    });
    
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    function highlight(item) {
        item.closest('.file_upload').style.border = '4px solid yellow';
    }
    
    function unHighlight(item) {
        item.closest('.file_upload').style.border = 'none';
    }
    

    
}

export default drop;