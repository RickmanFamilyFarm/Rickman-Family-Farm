//Get all dropdowns from the document
const dropdowns = document.querySelectorAll('.dropdown');

//Loop thourhg all dropdown elements
dropdowns.forEach(dropdown => {
    //get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    // doing this so theres multiple dropdowns if wanted

    //add a click event to the select element
    select.addEventListener('click', () => {
        //add the clicked select styles to the select elements
        select.classList.toggle('select-clicked');
        //add the rotate styles to the caret element
        caret.classList.toggle('caret-rotate');
        //add the open styles to the menu element
        menu.classList.toggle('menu-open');
    });

    //loops thorugh all options elements
    options.forEach(option => {
        //add a click event to the option element
        option.addEventListener('click', () => {
            //change inner text clicked option inner text
            selected.innerText = option.innerText;
            //add text fade in animation
            selected.classList.add("text-fade-in");
            //remove animation after it is finished (so that it can work again)
            setTimeout(() => {
                selected.classList.remove("text-fade-in");
            }, 300);
            //remove the clicked select styles to the select element
            select.classList.remove('select-clicked');
            //add the rotate styles to the caret element
            caret.classList.remove('caret-rotate');
            //add the open styles to the ,menu element
            menu.classList.remove('menu-open');
            //remove active class from all option elements
            option.forEach(option => {
                option.classList.remove('active');
            });
            //add active class to clicked option element
            option.classList.add('active');
        });
    });

    /*add click event to the entire window*/
    window.addEventListener("click", e => {
        //get the dropdown size and position
        const size = dropdown.getBoundingClientRect();

        if(
            e.clientX < size.left ||
            e.clientX > size.right ||
            e.clientY < size.top ||
            e.clientY > size.bottom
        ) {
            //remove the clicked select styles from the select element
            select.classList.remove('select-clicked');
            //remove the rotate styles from the caret element
            caret.classList.remove('caret-rotate');
            //remove the open stylse from the menu element
            menu.classList.remove('menu-open');
        }
    });
});