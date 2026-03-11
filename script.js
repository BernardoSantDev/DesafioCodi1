const toggleBtn = document.getElementById('toggleBtn');
const eyeIcon = document.getElementById('eyeIcon')
const sensitiveElements = document.querySelectorAll('.sensitive-data');
let isHidden = false;

toggleBtn.addEventListener('click', () => {
    isHidden = !isHidden;

    if(isHidden){
        eyeIcon.src = 'imagem/olhoFechado.png';
        sensitiveElements.forEach(el => {
            el.textContent = '••••••••';
        })
    }




})





