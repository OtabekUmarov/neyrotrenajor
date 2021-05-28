var minus = document.querySelectorAll('.top__svg')
var plyus = document.querySelectorAll('.bottom__svg')
var count = document.querySelectorAll('.soni')
var narx1 = document.querySelectorAll('.narx1')
var narxeski = document.querySelectorAll('.narx2')
var kupit = document.querySelectorAll('.kupit')
var bars = document.querySelector('.bars')
var headT = document.querySelector('.header__top')
var headB = document.querySelector('.header__bottom')
var headF = document.querySelector('.header-flex')
var selectBtn = document.querySelector('.selectBtn')
var selectUl = document.querySelector('.selectUl')
var narxChange1 = document.querySelector('.narxChange1')
var narxRange1 = document.querySelector('.narxRange1')
var mobileFiltr = document.querySelector('.mobileFiltr')
var mobileNarx = document.querySelector('.mobileNarx')
var kategoriya = document.querySelector('.kategoriya')
var exitTovar = document.querySelector('.exitTovar')
var exitNarx = document.querySelector('.exitNarx')
var filtersBox = document.querySelector('.filters__box')
var modalPoisk = document.querySelector('.modalPoisk')
var exitPoisk = document.querySelector('.exitPoisk')
var poiskIcon = document.querySelector('.search-icon img')

bars.addEventListener('click', ()=> {
    headT.classList.toggle('active')
})

headB.addEventListener('click', ()=> {
    headF.classList.toggle('active')
})
var soni = 0
for(let i=0; i < plyus.length; i++){
    plyus[i].addEventListener('click', function(){
        count[i].value++
        soni = count[i].value   
    })
}

for(let i=0; i < minus.length; i++){
    minus[i].addEventListener('click', function(){
        if (count[i].value == 0) 
            return false
        count[i].value--
        soni = count[i].value   
    })
}

for(let i=0; i < kupit.length; i++){
    kupit[i].addEventListener('click', function(){
        var narx = kupit[i].getAttribute('data-narx');
        var narx2 = kupit[i].getAttribute('data-narx2');
        narx = parseInt(narx.replace(/ /ig,''))
        narx2 = parseInt(narx2.replace(/ /ig,''))
        narx = narx * soni
        narx2 = narx2 * soni
        narx1[i].innerHTML = narx + ' p'

        narxeski[i].innerHTML = narx2 + ' p'
    })
}

selectBtn.addEventListener('click', ()=>{
    selectUl.classList.toggle('active')
})

narxChange1.addEventListener('input', ()=>{
    console.log(narxChange1.value);
    narxRange1.value = narxChange1.value
})

mobileFiltr.addEventListener('click', ()=>{
    kategoriya.classList.add('active')
    exitTovar.classList.add('active')
})
mobileNarx.addEventListener('click', ()=>{
    filtersBox.classList.add('active')
    exitNarx.classList.add('active')
})
exitTovar.addEventListener('click', ()=>{
    kategoriya.classList.remove('active')
})
exitNarx.addEventListener('click', ()=>{
    filtersBox.classList.remove('active')
})
poiskIcon.addEventListener('click', ()=>{
    modalPoisk.classList.add('active')
    exitPoisk.classList.add('active')
})
exitPoisk.addEventListener('click', ()=>{
    modalPoisk.classList.remove('active')
})