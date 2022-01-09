const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    // const triggerBottom = window.innerHeight * 0.8;
    // 0.8 is equivalent of 4/5
    // So effectively we are saying that  triggerBottom is 80% of window.innerHeight.
    const triggerBottom = window.innerHeight / 5 * 3
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}