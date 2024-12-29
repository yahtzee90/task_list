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
        <li>
          ${task.content}
        </li>
      `;
    };

    document.querySelector("#js-listContent").innerHTML = htmlString;

  };



  const init = () => {
    render();
  };

  init();
}