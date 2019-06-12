'use strict'

const btnTransfer = document.getElementById('btnTransfer')
const btnService = document.getElementById('btnService')
const transfer = document.getElementById('transfer')
const service = document.getElementById('service')
const fTransfer = document.getElementById('formTransfer')
const fService = document.getElementById('formService')

//Evento boton One-way transfer
btnTransfer.addEventListener('click', function(){
    service.classList.remove('activeBtn')
    transfer.classList.add('activeBtn')
    transfer.style.setProperty('--bg-pseudo', '#997f60')
    service.style.setProperty('--bg-pseudo-inactive', '#000')
    fService.style.display = 'none'
    fTransfer.style.display = 'flex'

})

//Evento boton Hourly Service
btnService.addEventListener('click', function(){
    service.classList.add('activeBtn')
    transfer.classList.remove('activeBtn')
    transfer.style.setProperty('--bg-pseudo', '#000')
    service.style.setProperty('--bg-pseudo-inactive', '#997f60')
    fTransfer.style.display = 'none'
    fService.style.display = 'flex'
    
})