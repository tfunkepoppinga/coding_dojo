const accordionTrigger = document.querySelectorAll('.js-accordion-trigger');
const accordionItem = document.querySelectorAll('.c-accordion__item');
const activeClass = 'is-active';

accordionTrigger.forEach(function(accordion){
    accordion.addEventListener('click', function(event){
        accordionItem.forEach(function(element) {
            element.classList.remove(activeClass);
        });
        event.target.parentElement.classList.add(activeClass);
    })
})