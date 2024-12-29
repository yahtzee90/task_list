{

  const tasks = [
    {
      content: "zrobić listę",
      done: false,
    },
    {
      content: "poprawić stylizację",
      done: false,
    },
    {
      content: "Wziąć się do roboty.",
      done: true,
    }
  
  ];

  const render = () => {
    let htmlString = "";

    for(const task of tasks) {
      htmlString += `
        <li class="item">
          <div class="item__check">&#10004;</div>
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

  };

  const addNewTask = (newTask) => {
    tasks.push({
      content: newTask,
      done: false,
    });

    render();
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  const init = () => {
    render();

    const taskAdd = document.querySelector("#js-taskAdd");

    taskAdd.addEventListener("click", () => {
      const newTask = document.querySelector("#js-taskValue").value.trim();

      if(newTask === "") {
        return;
      }

      addNewTask(newTask);
      document.querySelector("#js-taskValue").value = "";
      document.querySelector("#js-taskValue").focus();

    });

  };

  init();
}