const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__menu');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

let project = setInterval(projectDone, 65)
let count1 = 1;

function projectDone() {
    count1++;
    document.querySelector("#number").innerHTML = count1;

    if (count1 == 250) {
        clearInterval(project)
    }
}