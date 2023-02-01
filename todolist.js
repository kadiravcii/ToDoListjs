let inputform = document.querySelector('#inputform')
let addbutton = document.querySelector('#addbutton')
let elementlist = document.querySelector('#todolist')
let removebutton = document.querySelectorAll('#removed')
let listchild = document.querySelectorAll('li')



addbutton.addEventListener('click',additem)
function addRemoveListener(){
    let removebutton = document.querySelectorAll('#removed')
    removebutton.forEach(element => {
        element.addEventListener('click', removeitem)
    });
}
if(removebutton != null){
    addRemoveListener()
}
function linelistener(){
    let listchild = document.querySelectorAll('li')
    listchild.forEach(item => {
        item.addEventListener('click',checked)
    })
}
if(listchild != null){
    linelistener()
}
function additem(){
    if (inputform.value == "") {
        let toasterror= document.querySelector('#liveToast2')
        let error1 = new bootstrap.Toast(toasterror);
        error1.show()
        return;
    }
    let newli = document.createElement('li')
    newli.innerHTML = ` ${inputform.value}`
    newli.className = 'gölge'
    if (elementlist.childElementCount % 2 == 0){
        newli.classList.add('text-muted')
        newli.classList.add('bg-light')
        newli.classList.add('text-dark')
    }
    let trashbox = document.createElement('i')
    trashbox.className = 'fa-solid fa-trash sola'
    trashbox.id = 'removed'
    newli.appendChild(trashbox)
    elementlist.appendChild(newli)   
    linelistener()
    addRemoveListener()
    inputform.value = ""
    let successtoast = document.querySelector('#liveToast1')
    let success1 = new bootstrap.Toast(successtoast);
    success1.show()
    
}

function removeitem(){
    this.parentElement.remove()
}
function checked(){
    if(!this.classList.contains('line-through')){
        this.classList.add('line-through')
        this.classList.remove('bg-light')
        this.classList.add('text-white')
        let verify = document.createElement('i')
        verify.className =  'fa-solid fa-octagon-check sola'
        this.appendChild(verify)
        return;
    }
    this.classList.remove('line-through')
    this.classList.add('bg-light')
    this.classList.remove('text-white')

    
    
}
//<i class="bi bi-trash3"></i> 