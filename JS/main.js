var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");
var btn = document.getElementById("addBtn");
// var search=document.getElementById('siteSearch');

var websitesContainer = [];

if (localStorage.getItem("website") != null) {
  websitesContainer = JSON.parse(localStorage.getItem("website"));
  displayWebSites(websitesContainer);
}

function addSite() {
  if (btn.innerHTML == "Update") {
    updateDate();
  } else {
    newSite = {
      name: siteNameInput.value,
      urlSite: siteUrlInput.value,
    };

    // cartona += newSite;
    websitesContainer.push(newSite);

    localStorage.setItem("website", JSON.stringify(websitesContainer));
    displayWebSites(websitesContainer);
  }

  clear();
}

function displayWebSites(array) {
  var diplaytable = ``;
  for (let index = 0; index < array.length; index++) {
    diplaytable += ` <tr> 
        <td>${array[index].name}</td>
        <td>${array[index].urlSite}</td>
        <td><a class="link" href="${array[index].urlSite}">visit</a></td>
        <td><button class="btn btn-outline-warning" onclick="showValues(${index});"> update</button></td>
        <td><button class="btn btn-outline-danger" onclick="deleteSite(${index});"> delete</button></td></tr>`;
  }

  document.getElementById("tbody").innerHTML = diplaytable;
}

//clear
function clear() {
  siteNameInput.value = "";
  siteUrlInput.value = "";
}

//delete data
function deleteSite(index) {
  websitesContainer.splice(index, 1);
  localStorage.setItem("website", JSON.stringify(websitesContainer));
  displayWebSites(websitesContainer);
}

//showdata
function showValues(index) {
  btn.innerHTML = "Update";
  siteNameInput.value = websitesContainer[index].name;
  siteUrlInput.value = websitesContainer[index].urlSite;
  btn.setAttribute("index", index);
}

//upsate data
function updateDate() {
  var i = btn.getAttribute("index");
  websitesContainer.splice(
    i,
    1,
    (newSite = {
      name: siteNameInput.value,
      urlSite: siteUrlInput.value,
    })
  );
  localStorage.setItem("website", JSON.stringify(websitesContainer));
  displayWebSites(websitesContainer);

  btn.innerHTML = "Submit";
}

//search
function searchItems(item) {
  var matchedItems = [];
  for (let index = 0; index < websitesContainer.length; index++) {
    if (
      websitesContainer[index].name.toLowerCase().includes(item.toLowerCase())
    ) {
      matchedItems.push(websitesContainer[index]);
    }
  }

  displayWebSites(matchedItems);
}
