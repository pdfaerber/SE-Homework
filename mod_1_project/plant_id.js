/*********************************************************************************
 * Patrick D. Faerber, Cohort 13, Module One Project Homework, August 25, 2021
 *
 * "Patrick's House (Apt :)) of Plants" - some common house plants that I inherited
 * just after taking root from cuttings, and I'm learning how to care for them.
 *
 * I'm using the PlantID API with the permission of Dominika Krejčí to ID my plants
 * based on photos I've taken with my iPhone and returning some of the key values
 * using the fetch method with JSON REST API that Plant ID provides.
 *
 * PlantID API response values in JSON format that I intend to display in the browser
 *
 * plant_details.common_names
 * plant_details.edible_parts
 * plant_details.propagation_methods
 * plant_details.synonyms
 * plant_details.url
 *
 * ***********************************************************************************/
let rqst_id = "26887650";
const API_KEY = "api_key=vTL81MsH12HhssjdSLTA8gBwNmDCizzF3gqozt0QQSzPmah9xL";
//JSON REST API uses slash notation for parameters 
let BASE_URL = "https://api.plant.id/v2/"
let id_endpoint = "get_identification_result&" 
let URL = BASE_URL+id_endpoint+API_KEY
// let url = `https://api.plant.id/v2/get_identification_result/`+ API_KEY;



function getPlantIds() {
  alert("plant me");
  const data = {
    api_key: "vTL81MsH12HhssjdSLTA8gBwNmDCizzF3gqozt0QQSzPmah9xL", //my plantID api key
    id: rqst_id,
    plant_details: [
      "common_names",
      "url",
      "edible_parts",
      "propagation_methods",
      "name_authority",
      "wiki_description",
      "taxonomy",
      "synonyms"
    ],
  };

  
  fetch(URL, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
      //  "Api-Key": vTL81MsH12HhssjdSLTA8gBwNmDCizzF3gqozt0QQSzPmah9xL,
    },
  }).then((response) => console.log(response))
  .then((data) => {
    console.log("Success:", data);
  })
  // .catch((error) => {
  // //   console.error("Error:", error);
  // });
} //close getPlantIds ()
