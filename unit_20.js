

function t11() {
    let select = event.keyCode;
    let td = document.querySelectorAll('td');
    for (let elem of td) {
        if (elem.getAttribute('data') == select) {
            elem.classList.add('myselect');
            if (select == 20) {
                this.onkeydown = () => {
                    elem.classList.remove('myselect');
                }
            } else {
                this.onkeyup = () => {
                    elem.classList.remove('myselect');
                }
            }
        }
    }
}

document.querySelector('.i-11').onkeydown = t11;

