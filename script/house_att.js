import { data_house } from "./pro-congress-117-house.mjs";

const members = data_house.results[0].members;



/* let mostMissedvotes = members.sort((a,b)=>(a.missed_votes-b.missed_votes));
let leastMissedvotes = members.sort((a,b)=>(b.missed_votes-a.missed_votes)); */

//create table

const createTable = (array) => {
    document.getElementById("mostengaged").innerHTML = "";
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
      let tdNMissedVotes = document.createElement("td");
      let tdMissed = document.createElement("td");
  
      tdName.appendChild(anchor); //add the anchor to the td tag
      /* tdName.innerHTML= array[i].first_name + " " +  middleName + " " + array[i].last_name; */
      tdNMissedVotes.innerHTML= array[i].missed_votes;
      tdMissed.innerHTML= array[i].missed_votes_pct;
      newRow.append(tdName, tdNMissedVotes, tdMissed); // append all td's to the same row
      mostengaged.append(newRow); // append every new row to the tbody (table)
    }
   }

   const createTable1 = (array) => {
    document.getElementById("bottom").innerHTML = "";
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
      let tdNMissedVotes = document.createElement("td");
      let tdMissed = document.createElement("td");
  
      tdName.appendChild(anchor); //add the anchor to the td tag
      /* tdName.innerHTML= array[i].first_name + " " +  middleName + " " + array[i].last_name; */
      tdNMissedVotes.innerHTML= array[i].missed_votes;
      tdMissed.innerHTML= array[i].missed_votes_pct;
      newRow.append(tdName, tdNMissedVotes, tdMissed); // append all td's to the same row
      bottom.append(newRow); // append every new row to the tbody (table)
    }
   }


//sorted arrays

const mostEngaged = (array) => {
    let leastmissed = array.sort((a,b) => (a.missed_votes - b.missed_votes));
    let tenleast = leastmissed.slice(0, 9);
    let i = 0;
    while (leastmissed[9].missed_votes == leastmissed[9+i].missed_votes) {
        tenleast.push(leastmissed[9+i]);
        i++;
    }
    createTable(tenleast);
}

mostEngaged(members);

const leastEngaged = (array) => {
    let mostmissed = array.sort((a,b) => (b.missed_votes - a.missed_votes));
    let tenmost = mostmissed.slice(0, 9);
    let i = 0;
    while (mostmissed[9].missed_votes == mostmissed[9+i].missed_votes) {
        tenmost.push(mostmissed[9+i]);
        i++;
    }
    createTable1(tenmost);
}

leastEngaged(members);

//party

const party = (array) => {
  let countR = array.filter((a) => a.party === "R").length;
  let countD = array.filter((a) => a.party === "D").length;
  let countID = array.filter((a) => a.party === "ID").length;
  let countT = countD + countID + countR;
  let mediaR = ((countR*100)/countT).toFixed(2);
  let mediaD = ((countD*100)/countT).toFixed(2);
  let mediaID = ((countID*100)/countT).toFixed(2);
  for (let i = 0; i <3; i++) {
    let row = document.createElement("tr");
    if (i===0) {
      row.insertCell().innerHTML = "Republican";
      row.insertCell().innerHTML = countR;
      row.insertCell().innerHTML = mediaR+"%";
      document.getElementById("counters").append(row)
    }
    else if (i===1) {
      row.insertCell().innerHTML = "Democrat";
      row.insertCell().innerHTML = countD;
      row.insertCell().innerHTML = mediaD+"%";
      document.getElementById("counters").append(row)
    }
    else if (i===2) {
      row.insertCell().innerHTML = "Independent";
      row.insertCell().innerHTML = countID;
      row.insertCell().innerHTML = mediaID+"%";
      document.getElementById("counters").append(row)
    }
  }
}

party(members);