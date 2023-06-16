const input = document.querySelector('#task-name');
const button = document.querySelector('button');
const allTasks = document.querySelector('.all-tasks');
const clearButton = document.querySelector('.clear');

button.addEventListener('click', function(){
  console.log(input.value);
  allTasks.innerHTML += '<h3>' + input.value + '</h3>';
  input.value = '';
})