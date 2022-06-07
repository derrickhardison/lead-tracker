// VARIABLES

let myLeads = [];

const storedData = JSON.parse(localStorage.getItem("myLeads"));

// DOM VARIABLES
const saveBtn = document.getElementById("input-button");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-button");

//
if (storedData) {
  myLeads = storedData;
  renderLeads();
  console.log(storedData);
}

// FUNCTIONS

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
      <a href=${myLeads[i]} target='_blank'>${myLeads[i]}
      </a>
    </li>
    `;
  }
  ulEl.innerHTML = listItems;
}

// EVENT LISTENERS
saveBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";

  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  renderLeads();
});

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  renderLeads();
});
