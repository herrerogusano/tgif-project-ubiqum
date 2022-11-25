import {data} from "./pro-congress-117-senate.mjs"

let members = data.results[0].members;



//create tables

const createTable1 = (array) => {
    document.getElementById("tbody1").innerHTML = "";
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


   const createTable2 = (array) => {
    document.getElementById("tbody2").innerHTML = "";
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

   //sorted arrays


const mostLoyal = (array) => {
  let moreLoyal = array.sort((a,b) => (b.votes_with_party_pct - a.votes_with_party_pct));
  let tenmost = moreLoyal.slice(0, 9);
  let i = 0;
  while (moreLoyal[9].votes_with_party_pct == moreLoyal[9+i].votes_with_party_pct) {
      tenmost.push(moreLoyal[9+i]);
      i++;
  }
  createTable2(tenmost);
}

mostLoyal(members);

const leastLoyal = (array) => {
  let lessLoyal = array.sort((a,b) => (b.votes_against_party_pct - a.votes_against_party_pct));
  let tenleast = lessLoyal.slice(0, 9);
  let i = 0;
  while (lessLoyal[9].votes_against_party_pct == lessLoyal[9+i].votes_against_party_pct) {
      tenleast.push(lessLoyal[9+i]);
      i++;
  }
  createTable1(tenleast);
}

leastLoyal(members);


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
      document.getElementById("tbody").append(row)
    }
    else if (i===1) {
      row.insertCell().innerHTML = "Democrat";
      row.insertCell().innerHTML = countD;
      row.insertCell().innerHTML = mediaD+"%";
      document.getElementById("tbody").append(row)
    }
    else if (i===2) {
      row.insertCell().innerHTML = "Independent";
      row.insertCell().innerHTML = countID;
      row.insertCell().innerHTML = mediaID+"%";
      document.getElementById("tbody").append(row)
    }
  }
}

party(members);
