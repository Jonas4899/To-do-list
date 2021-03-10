const activity = document.querySelector('.add-task input[type="text"]');
const addBtn = document.querySelector('.add-button');
const taskSection = document.querySelector('.task-list');

class Task {
  constructor(name) {
    this.name = name;
  }

  showTask () {
    let div = document.createElement('div');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');
    let btnDelete = document.createElement('button');

    checkbox.setAttribute('type', 'checkbox');
    label.textContent = this.name;
    btnDelete.textContent = 'Delete';

    div.appendChild(checkbox);
    div.appendChild(label);
    div.appendChild(btnDelete);
    taskSection.appendChild(div);

    /* Add the action of delete to the bottom */
    btnDelete.onclick = function() {
      taskSection.removeChild(div);
    }
  }
}

function addElement() {
  if(activity.value == ''){
    alert('Fill the Task spot.');
  } else {
    let task = new Task(activity.value);
    activity.value = '';
    task.showTask();
  }
}

addBtn.addEventListener('click', addElement);

