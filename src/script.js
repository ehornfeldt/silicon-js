const subscribe = document.querySelector('#subscribe-form')
console.log("SUB:", subscribe)
subscribe.addEventListener('submit', e => {
    e.preventDefault();
    console.log("TEST!!!")
    console.log(e)
})