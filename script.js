// VARIABLES

let myLeads = [];

const storedData = JSON.parse(localStorage.getItem("myLeads"));

// DOM VARIABLES
const saveBtn = document.getElementById("input-button");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-button");
const saveTabBtn = document.getElementById("save-tab-button");

// CONDITIONALS
if (storedData) {
  myLeads = storedData;
  renderLeads(myLeads);
  console.log(storedData);
}

// FUNCTIONS

function renderLeads(arr) {
  let listItems = "";
  for (let i = 0; i < arr.length; i++) {
    listItems += `
    <li>
      <a href=${arr[i]} target='_blank'>${arr[i]}
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

  renderLeads(myLeads);
});

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  renderLeads(myLeads);
});

saveTabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log(tabs);

    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads(myLeads);
    // let activeTab = tabs[0];
    // let activeTabId = activeTab.id;

    // console.log(activeTab, activeTabId);
  });
});
