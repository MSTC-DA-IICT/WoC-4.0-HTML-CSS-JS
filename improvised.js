


///New one
// STORAGE
// run bolow code for demonstrate localStorage:
const storage01 = {
    "entertainment": ["netflix", "amazon prime", "telegram", "youtube"],
    "studies": ["CT", "EL", "IT", "SC"]
}
// localStorage.setItem("entertainment",JSON.stringify(storage01.entertainment));
// localStorage.setItem("studies",JSON.stringify(storage01.studies));
//End
// DECLARATIONS
const cards = document.querySelector('.cards');
const newList = document.querySelector('.fa-plus');
const newTask = document.getElementsByClassName('newTask');
// const edit = document.querySelectorAll('.fa-edit');
const trash = document.getElementsByClassName('fa-trash');
const lis = document.getElementsByClassName('lis');
const delList = document.getElementsByClassName('deleteList');
const tasks = document.getElementsByTagName('span');
const cardsR = document.getElementsByClassName('card');
// EVENT LISTENERS
cards.addEventListener('click', doit);
newList.addEventListener('click', addNewList);
// FUNCTIONS
// 1. Populate the DOM using the storage - HARSH (Done)
window.onload = (e) => {
    for (let i = 0; i < localStorage.length; i++) {
        var listItm = '';
        const key = localStorage.key(i);
        const listTask = JSON.parse(localStorage.getItem(key));
        cardsR[i].children[1].previousElementSibling.children[0].innerText = key;

        for (let j = 0; j < listTask.length; j++) {
            listItm += `<li class="lis"><span>${listTask[j]}<i class="fas fa-trash"></i></span></li>`
            listItm += `<li class="lis"><span>${listTask[j]}<i class="fas fa-trash"></i></span><span> <i class="fas fa-edit"></i></span></li>`
        }
        // console.log(listItm);
        cardsR[i].children[1].children[0].innerHTML = listItm;
    }
};
//Done Task 01
// 2. Add new list - JINAL
function addNewList() {
    const userTitle = prompt('Enter the title of your new list');

    let HTMLstr = ` <div class="card">
                    <div class="cardTitle">
                        <h2>${userTitle}</h2>
                    </div>
                    <div class="tasks">
                        <ul>
                            
                        </ul>
                        <button class="newTask">Add Task</button>
                        <button class="deleteList">Delete List</button>
                    </div>`

    const div = document.getElementById('cards');
    div.innerHTML += HTMLstr;
    localStorage.setItem(userTitle, null);
}
// 3. Add new task to a list - KAUSHAL
/* `<li class="lis">
        <span>
            <i class="fas fa-trash"></i>
        </span>
    </li>` */
// 4. Delete a task from the list - ARPAN
// 5. Delete a list - ISHA
for (const item of delList) {
    item.addEventListener('click', () => {
        item.parentElement.parentElement.remove();
        localStorage.removeItem(item.parentElement.parentElement);
    })
}
// 6. Strike through a task(mark as done) - KAVYA
// 7. Update a task - DHAIRYA

// function fetchandPush()



// 
function doit(e) {
    if (e.target.className === 'newTask') {
        const usertask = prompt("enter the task");
        const rootpath = e.target.parentElement.previousElementSibling.children[0].innerText;
        var dataTask = JSON.parse(localStorage.getItem(rootpath));
        dataTask.push(usertask);
        console.log(dataTask);
        var task = localStorage.setItem(rootpath, JSON.stringify(dataTask));
        if (dataTask === null) {
            // console.log(JSON.stringify([usertask]));
            localStorage.setItem(rootpath, JSON.stringify([usertask]));
        }
        else {
            dataTask.push(usertask);
            console.log(dataTask);
            var task = localStorage.setItem(rootpath, JSON.stringify(dataTask));
        }

        location.reload();
        e.stopPropagation();
    }
    else if (e.target.classList[1] === 'fa-edit') {

        let a = e.target.parentElement.parentElement.innerText;
        console.log(a);
        const usertask = prompt("enter the task", a);
        var rootpath = e.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.children[0].innerText;;
        var dataTask = JSON.parse(localStorage.getItem(rootpath));
        for (let j = 0; j < dataTask.length; j++) {
            if (dataTask[j] == a) {
                dataTask[j] = usertask;
                break;
            }
        }
        var task = localStorage.setItem(rootpath, JSON.stringify(dataTask));
        location.reload();

    }
    else if (e.target.classList[1] === 'fa-trash') {
        e.target.parentElement.remove();
    }
    else if (e.target.classList[0] === 'deleteList') {
        e.target.parentElement.parentElement.remove();
    }
    else if (e.target.localName === 'span')
        e.target.classList.toggle('done');
}
function addNewList() {
    const userTitle = prompt('Enter the title of your new list');
    const card = document.createElement('div');
    card.classList.add('card');
    const cardTitle = document.createElement('div');
    cardTitle.classList.add('cardTitle');
    const cardTitleh2 = document.createElement('h2');
    cardTitleh2.innerText = userTitle;
    const tasksdiv = document.createElement('div');
    tasksdiv.classList.add('tasks');
    const tasksul = document.createElement('ul');
    const createTaskBtn = document.createElement('button');
    const deleteListBtn = document.createElement('button');
    createTaskBtn.classList.add('newTask');
    createTaskBtn.innerText = 'Add Task';
    deleteListBtn.classList.add('deleteList');
    deleteListBtn.innerText = 'Delete List';
    cards.appendChild(card);
    card.appendChild(cardTitle);
    card.appendChild(tasksdiv);
    cardTitle.appendChild(cardTitleh2);
    tasksdiv.appendChild(tasksul);
    tasksdiv.appendChild(createTaskBtn);
    tasksdiv.appendChild(deleteListBtn);
}