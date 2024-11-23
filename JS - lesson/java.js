const elBtnLeft = document.querySelector('.btn__left');
const elBtnRight = document.querySelector('.btn__right');
const elProductNameInput = document.querySelector('.product__name');
const elProductList = document.querySelector('.product__list');
const elProductiveindex = document.querySelector('.product__index')
const elBtDelete = document.querySelector('.btn__remove')

const products = []

// to'ldirish section
elBtnRight.addEventListener('click', function () {
    let product = elProductNameInput.value

    if (product === "") {
        alert("Maydonni to'ldiring")
        elProductNameInput.focus()
    } else {
        if (products.indexOf(product) > -1) {
            alert("bu maxsulot bor!")
        } else {
            products.push(product)
            elProductList.innerHTML = products.join("<br>")
            elProductNameInput.value = ""
            elProductNameInput.focus()
        }
    }
})
// to'ldirish section
elBtnLeft.addEventListener('click', function () {
    let product = elProductNameInput.value

    if (product === "") {
        alert("Maydonni to'ldiring")
        elProductNameInput.focus()
    } else {
        if (products.indexOf(product) > -1) {
            alert("bu maxsulot bor!")
        } else {
            products.unshift(product)
            elProductList.innerHTML = products.join("<br>")
            elProductNameInput.value = ""
            elProductNameInput.focus()
        }
    }
})
// ochirish section
elProductiveindex.addEventListener('input', function () {
    if (products.length < 1) {
        alert("you can't erase it")
        elProductiveindex.value = ""
    }
})

elBtDelete.addEventListener('click', function () {
    let index = elProductiveindex.value
    let a = + index - 1

    if (isFinite(index)) {
        products.splice(a,1)
        elProductList.innerHTML = products.join("<br>")
        elProductiveindex.value = ""
    }
})