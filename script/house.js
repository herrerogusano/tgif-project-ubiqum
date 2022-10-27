import {data_house} from './pro-congress-117-house.mjs';
import {states} from './state-hash.mjs';
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

//tables
 const members = data_house.results[0].members;

 //select html element 
 let selectmenu = document.getElementById("dm-states");


 

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
 
 

//filter by states
 const dropdownmenuStates = (objects) => {
  const fullstates = Object.entries(objects);
  
  fullstates.forEach(state => {
    let option = document.createElement("option");
    option.value = state[0];
    option.text = state[1];
    selectmenu.appendChild(option);
  })
}

dropdownmenuStates(states);

//filter tables
const totalFilteredarray = (array) => {
  let filtered_array = [];
  let state = selectmenu.value;
  console.log(enabledSettings,'setting');//array we are gonna fill with filtered members

  //just dropdown menu
  if(enabledSettings.length === 0 && selectmenu.value === "All states") {
    filtered_array = array;
  }
  else {
    array.forEach(element => { //we use forEach method to check every element of the array members with the conditions below
      if(enabledSettings.length === 0 && selectmenu.value !== "All states") {
        if (element.state == state) {
          console.log(element.state,'states')
          filtered_array.push(element);
        }
    }
      else if (enabledSettings.length !== 0 && selectmenu.value === "All states"){
      if(enabledSettings.includes(element.party)) {
        filtered_array.push(element);
      }
  }
      else {
          if(enabledSettings.includes(element.party) && element.state == state) {
            filtered_array.push(element); 
        }
      }
  })
  }

return createTable(filtered_array);
}


//selected checkboxes
let enabledSettings = []
const allEventListener = (array) => {

selectmenu.addEventListener('change',(event)=> {
/*   let selected = event.target.value;
  let state_arr = array.filter(x=>x.state === selected) */
  totalFilteredarray(members);
});

checked_nodeList.forEach(function(checkbox) {// use Array.forEach to add an event listener to each checkbox.
  checkbox.addEventListener('change', function() {
    enabledSettings = 
      Array.from(checked_nodeList) // Convert checkboxes to an array to use filter and map.
      .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
      .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.

    totalFilteredarray(members);
  })
});
}
allEventListener(members);
