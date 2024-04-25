let hamburgerItem = document.getElementById("hamburgerItem");
let listItem = document.getElementById("listItems")

let xNav = ""

hamburgerItem.addEventListener('click', () => {
    if(listItem.classList.contains('actived')) {
        listItem.classList.remove('actived')
    } else {
        listItem.classList.add('actived')
    }
})

console.log(hamburgerItem)