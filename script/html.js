/* export const fetchJson= async(url) => {
 let response = await fetch("./pro-congress-117-senate.json");
 return response.json();
} */
export const fetchJson= async(url) => {
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

  
 }

 const createTable = () => {

 }
/* async function fetchJson() {
    try{
      const response =  await import('./pro-congress-117-senate.json')
      return response.json()
    }catch(err){
      return err
    }
} */

