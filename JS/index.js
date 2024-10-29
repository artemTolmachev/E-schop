let noticeEl = document.querySelector('.notice');
let stepperEls = document.querySelectorAll('.stepper');
let burger = document.querySelector('.burger');


if(noticeEl){
    const noticeCloseEl = noticeEl.querySelector('.notice__close')
    noticeCloseEl.addEventListener('click', () => {
        noticeEl.classList.add('notice--hidden')
    })
}

if(stepperEls){
    stepperEls.forEach(stepperEl => {
        const stepperBtnMinusEl = stepperEl.querySelector('.stepper__btn--minus');
        const stepperBtnPlusEl = stepperEl.querySelector('.stepper__btn--plus');
        const stepperInputEl = stepperEl.querySelector('.stepper__input');
    
        let stepperMin = +stepperInputEl.getAttribute('min');
        let stepperMax = +stepperInputEl.getAttribute('max');
    
        let count = Number(stepperInputEl.value);
    
        stepperInputEl.addEventListener('change', () => {
            stepperBtnMinusEl.disabled = false;
            stepperBtnPlusEl.disabled = false;
    
            if(stepperInputEl.value <= stepperMin){
                stepperInputEl.value = stepperMin
                stepperBtnMinusEl.disabled = true;
            }
            if(stepperInputEl.value >= stepperMax){
                stepperInputEl.value = stepperMax
                stepperBtnPlusEl.disabled = true;
            }
        })
     
    
        stepperBtnPlusEl.addEventListener('click', () => {
            count = Number(stepperInputEl.value);
            if(count < stepperMax){
                stepperBtnMinusEl.disabled = false;
                stepperBtnPlusEl.disabled = false;
                count++;
                stepperInputEl.value = count;
            }
            if(count === stepperMax){
                stepperBtnPlusEl.disabled = true;
            }
            
        })
          
        stepperBtnMinusEl.addEventListener('click', () => {
            count = Number(stepperInputEl.value);
            console.log(stepperMin)
            if(count > stepperMin){
                stepperBtnMinusEl.disabled = false;
                stepperBtnPlusEl.disabled = false;
                count--;
                stepperInputEl.value = count;
            }
            if(count === stepperMin){
                stepperBtnMinusEl.disabled = true;
            }
        })
    })
}

if(burger){
    const menuEl = document.querySelector('.head__bottom');
    const body = document.querySelector('body');

    burger.addEventListener('click', () => {
        menuEl.classList.toggle('head__bottom--active');
        body.classList.add('stop-scroll');
        burger.classList.toggle('burger--active')
    })
}