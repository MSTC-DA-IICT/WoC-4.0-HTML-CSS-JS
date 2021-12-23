// STORAGE
const storage = {
    "entertainment": ["netflix", "amazon prime", "telegram", "youtube"],
    "studies": ["CT", "EL", "IT", "SC"]
}

// DECLARATIONS
const cards = document.querySelector('.cards');
const newList = document.querySelector('.fa-plus');
const newTask = document.getElementsByClassName('newTask');
// const edit = document.querySelectorAll('.fa-edit');
const trash = document.getElementsByClassName('fa-trash');
const lis = document.getElementsByClassName('lis');
const delList = document.getElementsByClassName('deleteList');
const tasks = document.getElementsByTagName('span');

// EVENT LISTENERS
cards.addEventListener('click', doit);
newList.addEventListener('click', addNewList);

function doit(e) {
    if (e.target.className === 'newTask') {
        const usertask = prompt("enter the task");
        const li = document.createElement('li');
        const span = document.createElement('span');
        // const iconedit = document.createElement('i');
        const icontrash = document.createElement('i');

        // iconedit.classList.add('fas', 'fa-edit');
        icontrash.classList.add('fas', 'fa-trash');

        span.innerText = usertask;
        li.appendChild(span);
        // span.appendChild(iconedit);
        span.appendChild(icontrash);
        e.target.parentElement.children[0].appendChild(li);
        e.stopPropagation();
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

function addNewList()
{
    const userTitle = prompt('Enter the title of your new list');

    let HTMLstr = `<div class="card">
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
    localStorage.setItem(userTitle,null);
}
