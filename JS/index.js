let noticeEl = document.querySelector('.notice');
let stepperEl = document.querySelector('.stepper');

if(noticeEl){
    const noticeCloseEl = noticeEl.querySelector('.notice__close')
    noticeCloseEl.addEventListener('click', () => {
        noticeEl.classList.add('notice--hidden')
    })
}

if(stepperEl){
    const stepperBtnMinusEl = stepperEl.querySelector('.stepper__btn--minus');
    const stepperBtnPlusEl = stepperEl.querySelector('.stepper__btn--plus');
    const stepperInputEl = document.querySelector('.stepper__input');

    let stepperMin = +stepperInputEl.getAttribute('min');
    let stepperMax = +stepperInputEl.getAttribute('max');

    let count = Number(stepperInputEl.value);

    stepperInputEl.addEventListener('change', () => {
        stepperBtnMinusEl.classList.remove('stepper__btn--disable');
        stepperBtnPlusEl.classList.remove('stepper__btn--disable');

        if(stepperInputEl.value <= stepperMin){
            stepperInputEl.value = stepperMin
            stepperBtnMinusEl.classList.add('stepper__btn--disable');
        }
        if(stepperInputEl.value >= stepperMax){
            stepperInputEl.value = stepperMax
            stepperBtnPlusEl.classList.add('stepper__btn--disable');
        }
    })
 

    stepperBtnPlusEl.addEventListener('click', () => {
        count = Number(stepperInputEl.value);
        if(count < stepperMax){
            stepperBtnMinusEl.classList.remove('stepper__btn--disable');
            stepperBtnPlusEl.classList.remove('stepper__btn--disable');
            count++;
            stepperInputEl.value = count;
        }
        if(count === stepperMax){
            stepperBtnPlusEl.classList.add('stepper__btn--disable');
        }
        
    })
      
    stepperBtnMinusEl.addEventListener('click', () => {
        count = Number(stepperInputEl.value);
        console.log(stepperMin)
        if(count > stepperMin){
            stepperBtnMinusEl.classList.remove('stepper__btn--disable');
            stepperBtnPlusEl.classList.remove('stepper__btn--disable');
            count--;
            stepperInputEl.value = count;
        }
        if(count === stepperMin){
            stepperBtnMinusEl.classList.add('stepper__btn--disable');
        }
    })
}