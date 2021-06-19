const options = ['iPhone', 'Watch', 'iPad', 'Mac'];
const mainEl = document.getElementById("menu");
let currentOption = 0;
const optionEl = document.getElementById("current-option");

const widthFix = document.getElementById("width-fix");

options.forEach(e => {
    let el = document.createElement('span');
    el.innerText = e;
    widthFix.appendChild(el)
});

optionEl.innerText = options[currentOption];

mainEl.onclick = function() {
    currentOption = currentOption<options.length-1?currentOption+1:0;
    optionEl.dataset.next = options[currentOption];

    mainEl.classList.add('anim');

    setTimeout(() => {
        optionEl.innerText = options[currentOption];
        mainEl.classList.remove('anim');
    }, 650);
}