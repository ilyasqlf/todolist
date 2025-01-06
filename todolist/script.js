// Sélection des éléments du DOM
const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Fonction pour ajouter une tâche
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskItem.appendChild(taskContent);

    // Bouton pour marquer la tâche comme complétée
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Terminer';
    completeBtn.onclick = () => {
      taskContent.classList.toggle('completed');
    };
    taskItem.appendChild(completeBtn);

    // Bouton pour supprimer la tâche
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Supprimer';
    deleteBtn.onclick = () => {
      taskList.removeChild(taskItem);
    };
    taskItem.appendChild(deleteBtn);

    // Ajouter la tâche à la liste
    taskList.appendChild(taskItem);

    // Réinitialiser le champ de saisie
    taskInput.value = '';
  }
}

// Ajouter la tâche lorsque l'utilisateur appuie sur "Ajouter"
addTaskBtn.onclick = addTask;

// Ajouter la tâche en appuyant sur "Entrée"
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
