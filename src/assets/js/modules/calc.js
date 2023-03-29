const calc = (size, material, options, code, result) => {
    const sizeBlock = document.querySelector(size);
    const materialBlock = document.querySelector(material);
    const optionsBlock = document.querySelector(options);
    const codeBlock = document.querySelector(code);
    const resultBlock = document.querySelector(result);
    let sum = 0;
    
    function calcFunc() {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
        
        if (sizeBlock.value === '' || materialBlock.value === '') {
            resultBlock.textContent = 'Please choose size and material!';
        } else if (codeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    }
    
    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    codeBlock.addEventListener('input', calcFunc);
}

export default calc;