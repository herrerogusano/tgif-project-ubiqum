import {data} from './pro-congress-117-senate.mjs';
/* export const fetchJson= async(url) => {
 let response = await fetch("./pro-congress-117-senate.json");
 return response.json();
} */
/* export const fetchJson= async(url) => {
 await fetch('pro-congress-117-senate.json')
  .then(function (response) {
    return response;
  })
  .then(function (data) {
    return data;
  })
  .catch(function (err) {
    console.log(err);
  });
 } */

//TABLES

 const members = data.results[0].members;
 
 const createTable = (array) => {
  document.getElementById("tbody").innerHTML = "";
  for(let i=0;i<array.length;i++) {
    //create new rows for each element of the list
    const newRow = document.createElement("tr");
    let middleName = array[i].middle_name;
    //check if we have a middle name
    if (middleName === null) {
      middleName = "";
    }  
    
    let anchor = document.createElement("a"); //create anchor tag
    anchor.setAttribute('href', array[i].url); //direction to find url
    anchor.textContent = array[i].first_name + " " +  middleName + " " + array[i].last_name; //content anchor
    let tdName = document.createElement("td"); //create td's of the table
    let tdParty = document.createElement("td");
    let tdState = document.createElement("td");
    let tdYearsOffice = document.createElement("td");
    let tdVotes = document.createElement("td");

    tdName.appendChild(anchor); //add the anchor to the td tag
    /* tdName.innerHTML= array[i].first_name + " " +  middleName + " " + array[i].last_name; */
    tdParty.innerHTML= array[i].party;
    tdState.innerHTML= array[i].state;
    tdYearsOffice.innerHTML= array[i].seniority;
    tdVotes.innerHTML= array[i].votes_with_party_pct;
    newRow.append(tdName, tdParty, tdState, tdYearsOffice, tdVotes); // append all td's to the same row
    tbody.append(newRow); // append every new row to the tbody (table)
  }
 }
 
 createTable(members);
 let checked_nodeList = document.querySelectorAll("input[type=checkbox]");
 let check = [];
 
 const parties = {
  R: "Republicans",
  D: "Democrats",
  ID: "Independents"
 }

 
//FILTER TABLES

const checkedbox = (array) => {
  check = Array.from(checked_nodeList) //converts checked_array that is a node list to an array
            .filter(i=>i.checked) //filter the checked ones
            .map(i=>i.value); //create a new array with the values of the checked ones
  console.log(check, 'check') 
  let filtered_array = []; //array we are gonna fill with filtered members
  array.forEach(element => { //we use forEach method to check every element of the array members with the condition below
    if (check.includes(element.party)) {
      filtered_array.push(element);
  }
})
return createTable(filtered_array);
}


//SELECTED CHECKBOX
let enabledSettings = []
const allEventListener = (array) => {
// Use Array.forEach to add an event listener to each checkbox.
checked_nodeList.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    enabledSettings = 
      Array.from(checked_nodeList) // Convert checkboxes to an array to use filter and map.
      .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
      .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
      console.log(enabledSettings,)
    
    checkedbox(members);
  })
});
}
allEventListener(members);






