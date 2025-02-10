//criar um objeto para todas as tasks, 
let arrayList = []
let list = document.querySelector("#list")
let task = document.querySelector("#task")//.value

document.addEventListener("keypress", function(e){
    if (e.key === "Enter" && !task.value) return window.alert("Nada a ser adicionado na lista!")
    if (e.key === "Enter" && task.value){
        getTask()
    }
})

function getTask() {
    if (!task.value) return window.alert("Nada a ser adicionado na lista!")
    arrayList.push(task.value)//funcionando
    saveJSON(arrayList)
    createList(arrayList, task.value)
    task.value = ""
    task.focus()
}

function addTask(task, newSubmit){
    let p = document.createElement('p')
    list.appendChild(p)
    p.appendChild(task) // element = newList = li
    task.innerHTML += "  " // adiciona espaco entre a lista e o submit
    task.appendChild(newSubmit)
}

function createList(array, task){
    let newList = document.createElement('li')
    let index = array.indexOf(task)//vai retornar o indice do elemento task dentro do array
    newList.innerHTML = array[index] //funcionando
    addSubmitList(newList, index)
    //list.appendChild(newList)
}

function addSubmitList(element, index){
    let newSubmit = document.createElement('input')
    newSubmit.type = 'submit'
    newSubmit.value = 'apagar'
    newSubmit.id = index //indexOf
    //newSubmit.onclick = "deleteTask()"
    //newSubmit.EventTarget
    newSubmit.addEventListener("click",  function(e){  
        arrayList[index] = 'ex' //funcionando
        //console.log (arrayList)
        element.innerHTML = ''
        element.remove('li')
        //localStorage.removeItem()
        //deleteJSON(arrayList, index)
        //console.log(arrayList)
        //let remove = arrayList.splice(index, 1, )
        //if (index > -1) arrayList.splice(index, 1)
        saveJSON(arrayList)
        createListJSON(element, index)
    })
    addTask(element, newSubmit)
}

function saveJSON(arrayList){
    let taskJSON = JSON.stringify(arrayList) //!IMPORTANTE
    //console.log(taskJSON) //!IMPORTANTE
    //taskJSON.slice(null, "")
    localStorage.setItem('tasks', taskJSON) //!IMPORTANTE
}

function addSaveTasks(){
    const tasks = localStorage.getItem('tasks')
    const taskList = JSON.parse(tasks)
    if (!task) taskList[task] = 'ex'
    for (let tasks in taskList){
        if (task === 'ex') continue
        console.log(taskList[tasks])
        createListJSON(taskList, tasks)
    }
}
addSaveTasks()

function createListJSON(array, task){
    if (!task) array[task] = 'ex'
    for (let i in array){
        if (array[task] === 'ex' ){
            continue
        } else{    
            let newList = document.createElement('li')
            //let index = array.indexOf(task)//vai retornar o indice do elemento task dentro do array
            newList.innerHTML = array[task] //funcionando
            addSubmitList(newList, task)
            //list.appendChild(newList)
        }
    }
   

}