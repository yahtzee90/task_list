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
        <li${task.done ? " style=\"text-decoration: line-through\"" : ""}>
          ${task.content}
        </li$>
      `;
    };

    document.querySelector("#js-listContent").innerHTML = htmlString;

  };

  const addNewTask = (newTask) => {
    tasks.push({
      content: newTask,
      done: false,
    });

    render();
  };

  const init = () => {
    render();

    const taskAdd = document.querySelector("#js-taskAdd");

    taskAdd.addEventListener("click", () => {
      const newTask = document.querySelector("#js-taskValue").value.trim();
      // console.log(newTask);

      if(newTask === "") {
        return;
      }

      addNewTask(newTask);

    });

  };

  init();
}