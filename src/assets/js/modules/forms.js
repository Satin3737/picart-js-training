import spinner from '../../img/spinner.gif';
import okImg from '../../img/ok.png';
import failImg from '../../img/fail.png';

const forms = () => {
    const forms = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const upload = document.querySelectorAll('[name="upload"]');

    const message = {
        loading: 'Загрузка',
        success: 'Успешно',
        failure: 'Ошибка',
        spinner: spinner,
        okImg: okImg,
        failImg: failImg,
    };
    
    const route = {
        designer: './server.php',
        question: './question.php'
    }
    
    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
        
        return await res.text();
    };
    
    const clearInputs = () => {
        inputs.forEach(input => {
           input.value = '';
        });
        upload.forEach(input => {
            input.previousElementSibling.textContent = 'Файл не выбран';
        });
    };
    
    upload.forEach(input => {
        input.addEventListener('input', () => {
            let dots;
            const arr = input.files[0].name.split('.');
            arr[0].length > 5 ? dots = '...' : dots = '.';
            input.previousElementSibling.textContent = arr[0].substring(0, 6) + dots + arr[1];
            
        });
    });

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
           e.preventDefault();
           
           let statusMessage = document.createElement('div');
           statusMessage.classList.add('status');
           form.parentNode.appendChild(statusMessage);
           form.classList.add('animated', 'fadeOut');
           setTimeout(() => {
               form.style.display = 'none';
           }, 500);
           
           let statusImg = document.createElement('img');
           let textMessage = document.createElement('div');
           
           statusImg.src = message.spinner;
           statusImg.classList.add('animated', 'fadeInUp');
           textMessage.textContent = message.loading;
           statusMessage.appendChild(statusImg);
           statusMessage.appendChild(textMessage);
           
           
           const formData = new FormData(form);
           let api;
           form.closest('.popup-design') || form.classList.contains('calc_form') ? api = route.designer : api = route.question;
           
            postData(api, formData)
                .then((res) => {
                    console.log(res);
                    statusImg.src = message.okImg;
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.src = message.failImg;
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        form.style.display = 'block';
                        form.classList.remove('fadeOut');
                        form.classList.add('fadeIn');
                    }, 5000);
                });
        });
    });

}

export default forms;