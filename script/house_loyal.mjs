import {data_house} from "./pro-congress-117-house.mjs"

let members = data_house.results[0].members;

//sorted arrays

let mostLoyal = members.sort((a,b) => b.votes_with_party_pct - a.votes_with_party_pct);
let leastLoyal = members.sort((a,b) => b.votes_against_party_pct - a.votes_against_party_pct);
console.log(mostLoyal);

const createTable = (array) => {
    document.getElementById("tbody1").innerHTML = "";
    for(let i=0;i<((array.length/100)*10);i++) {
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
      let tdNPartyVotes = document.createElement("td");
      let tdParty = document.createElement("td");
  
      tdName.appendChild(anchor); //add the anchor to the td tag
      /* tdName.innerHTML= array[i].first_name + " " +  middleName + " " + array[i].last_name; */
      tdNPartyVotes.innerHTML= array[i].total_votes;
      tdParty.innerHTML= array[i].votes_against_party_pct;
      newRow.append(tdName, tdNPartyVotes, tdParty); // append all td's to the same row
      tbody1.append(newRow); // append every new row to the tbody (table)
    }
   }

   createTable(leastLoyal);

   const createTable1 = (array) => {
    document.getElementById("tbody2").innerHTML = "";
    for(let i=0;i<((array.length/100)*10);i++) {
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
      let tdNPartyVotes = document.createElement("td");
      let tdParty = document.createElement("td");
  
      tdName.appendChild(anchor); //add the anchor to the td tag
      /* tdName.innerHTML= array[i].first_name + " " +  middleName + " " + array[i].last_name; */
      tdNPartyVotes.innerHTML= array[i].total_votes;
      tdParty.innerHTML= array[i].votes_with_party_pct;
      newRow.append(tdName, tdNPartyVotes, tdParty); // append all td's to the same row
      tbody2.append(newRow); // append every new row to the tbody (table)
    }
   }

   createTable1(mostLoyal);