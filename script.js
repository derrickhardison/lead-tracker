// VARIABLES

let myLeads = [];

// DOM VARIABLES
const saveBtn = document.getElementById("input-button");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

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
    console.log(listItems);
  }
  ulEl.innerHTML = listItems;
}

// EVENT LISTENERS
saveBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});
