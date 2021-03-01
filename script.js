const activity = document.querySelector('.activity');
const add = document.querySelector('.add');

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
    document.body.appendChild(div);

    btnDelete.onclick = function() {
      document.body.removeChild(div);
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

add.addEventListener('click', addElement);
