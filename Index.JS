const todo = document.getElementById('Form');
const newTaskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');

todo.addEventListener('submit', function(event) {
event.preventDefault();

if (newTaskInput.value.length <= 3) {
    alert("gotta be longer");
    return;
  }

const li = document.createElement('li');
  li.textContent = newTaskInput.value.trim();
 const button = document.createElement('button');
 button.textContent = "Done";
li.appendChild(button);

 taskList.appendChild(li);
 newTaskInput.value = '';

 button.addEventListener('click', () => li.classList.toggle('done'));
 li.addEventListener('click', () => taskList.removeChild(li));
});
