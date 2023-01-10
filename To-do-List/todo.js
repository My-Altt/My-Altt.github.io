var todo = {
  // (A) INITIALIZE TO DO LIST
  data : [], // todo list data array
  hAdd : null, // html add item text field
  hTemplate : null, // html item row template
  hList : null, // html to do list
  init : () => {
    // (A1) INIT LOCALSTORAGE
    if (localStorage.todo == undefined) { localStorage.todo = "[]"; }

    // (A2) RESTORE PREVIOUS SESSION
    todo.data = JSON.parse(localStorage.todo);

    // (A3) GET HTML ELEMENTS
    todo.hAdd = document.getElementById("todo-item");
    todo.hTemplate = document.getElementById("todo-template").content;
    todo.hList = document.getElementById("todo-list");

    // (A4) "ENABLE" ADD ITEM FORM
    document.getElementById("todo-add").onsubmit = todo.add;

    // (A5) DRAW TO DO LIST
    todo.draw();
  },

  // (B) DRAW TO DO LIST
  draw : () => {
    // (B1) RESET LIST
    todo.hList.innerHTML = "";

    // (B2) LOOP & GENERATE ROWS
    if (todo.data.length>0) { for (let id in todo.data) {
      let row = todo.hTemplate.cloneNode(true);
      row.querySelector(".todo-item").textContent = todo.data[id][0];
      row.querySelector(".todo-done").onclick = () => { todo.toggle(id); };
      row.querySelector(".todo-del").onclick = () => { todo.del(id); };
      if (todo.data[id][1]) {
        row.querySelector(".todo-item").classList.add("todo-ok");
      }
      todo.hList.appendChild(row);
    }}
  },

  // (C) HELPER - SAVE DATA INTO LOCAL STORAGE
  save: () => {
    localStorage.todo = JSON.stringify(todo.data);
    todo.draw();
  },

  // (D) ADD A NEW ITEM TO THE LIST
  add : () => {
    todo.data.push([todo.hAdd.value, false]);
    todo.hAdd.value = "";
    todo.save();
    return false;
  },

  // (E) UPDATE TODO ITEM DONE/NOT YET
  toggle: (id) => {
    todo.data[id][1] = !todo.data[id][1];
    todo.save();
  },

  // (F) DELETE ITEM
  del: (id) => { if (confirm("Delete task?")) {
    todo.data.splice(id, 1);
    todo.save();
  }}
};

// (G) PAGE INIT
window.addEventListener("load", todo.init);
