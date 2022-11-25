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

 const members = data.results[0].members;
 createTable(members);

 const createTable = (array) => {
  let tbody = document.getElementById("senateData");
  tbody.innerHTML = "";
  for(let i=0;i<array.length;i++) {
    //create new rows for each element of the list
    const newRow = document.createElement("tr");
    let middleName = array[i].middle_name;
    //check if we have a middle name
    if (middleName === null) {
      middleName = "";
    }  
    
    let tdName = document.createElement("td");
    let tdParty = document.createElement("td");
    let tdState = document.createElement("td");
    let tdYearsOffice = document.createElement("td");
    let tdVotes = document.createElement("td");

    tdName.innerHTML= array[i].first_name + " " +  middleName + " " + array[i].last_name;
    tdParty.innerHTML= array[i].party;
    tdState.innerHTML= array[i].state;
    tdYearsOffice.innerHTML= array[i].seniority;
    tdVotes.innerHTML= array[i].votes_with_party_pct;
    newRow.append(tdName, tdParty, tdState, tdYearsOffice, tdVotes);
    tbody.append(newRow); 
    
  }
 }


 