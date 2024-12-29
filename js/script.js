{

  const tasks = [
    {
      content: "Wziąć się do roboty.",
      done: true,
    },
    {
      content: "zrobić listę",
      done: true,
    },
    {
      content: "poprawić stylizację",
      done: false,
    },
  
  ];

  const render = () => {
    let htmlString = "";

    for(const task of tasks) {
      htmlString += `
        <li class="item">
          <div class="item__check js-done">&#10004;</div>
          <span class="item__value${task.done ? " item__value--done" : ""}">${task.content}</span>
          <div class="item__delete js-delete">&#128465;</div>
        </li>
      `;
    };

    document.querySelector("#js-listContent").innerHTML = htmlString;

    const deleteButtons = document.querySelectorAll(".js-delete")
    deleteButtons.forEach((deleteButton, taskIndex) => {
      deleteButton.addEventListener("click", () => {
        removeTask(taskIndex);
      });
    });

    const doneButtons = document.querySelectorAll(".js-done")
      doneButtons.forEach((doneButton, taskIndex) => {
        doneButton.addEventListener("click", () => {
          toggleDone(taskIndex)
        });
      });

  };

  const focus = () => {
    document.querySelector("#js-taskValue").value = "";
    document.querySelector("#js-taskValue").focus();
  };

  const addNewTask = (newTask) => {
    tasks.push({
      content: newTask,
      done: false,
    });
    render();
    focus();
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  const toggleDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };

  const init = () => {
    render();

    const taskAdd = document.querySelector("#js-taskAdd");

    taskAdd.addEventListener("click", () => {
      const newTask = document.querySelector("#js-taskValue").value.trim();

      if(newTask === "") {
        focus();
        return;
      }

      addNewTask(newTask);

    });

  };

  init();
}