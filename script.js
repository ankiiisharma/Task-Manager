const input = document.querySelector('#tasks');
const button = document.querySelector('button');
const allTasks = document.querySelector('.all-tasks');
const clear = document.querySelector('.clear-task');

button.addEventListener('click', function(){

  console.log(input.value);
  allTasks.innerHTML += '<h3>' + input.value + '</h3>';
  input.value='';
})

clear.addEventListener('click', function(){
  allTasks.innerHTML = '';
})