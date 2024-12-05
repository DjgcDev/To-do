const taskInput = document.getElementById('taskInput');
const addTaskbtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');


function addTask(){
	const taskText = taskInput.value.trim();
	// if the user added a text...
	if (taskText !== ""){
		const li = document.createElement('li'); //create a list
		li.textContent= taskText;


		const deleteBtn = document.createElement('buttons');
		deleteBtn.textContent= 'DELETE';
		deleteBtn.onclick = function(){
			taskList.removeChild(li);
			
		};
		li.appendChild(deleteBtn);
		taskList.appendChild(li); //add the items to the list..
		taskInput.value='';
		//completion toggle
		li.addEventListener('click', function(){
			li.classList.toggle ('completed');
			
		});
	}else{
		window.alert('hahaha galing');
	}
}
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
	