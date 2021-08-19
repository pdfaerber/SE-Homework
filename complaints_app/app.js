// /******************************************************************************************************
//  * Patrick D. Faerber, Cohort 13, Mod 1 - Week 4 - Homework 2, August 17, 2021
//  * 
//  * 
//  *  
//  * ******************** Data & Key Value Pairs ********************************************************
//  * API URLs:
//  * https://dev.socrata.com/foundry/data.cityofnewyork.us/erm2-nwe9
//  * https://data.cityofnewyork.us/browse?Dataset-Information_Agency=Police+Department+%28NYPD%29
//  * 
//  * Keys:
//  * Open 
//  * borough
//  * descriptor (which says what kind of complaint was made)
//  * agency: "NYPD" (because we only want complaints that were handled by the police department)
//  * resolution_description (which says how the police handled the complaint)
//  * 
//  ************************* Application Requirements **********************************************************
//  *
//  * a. Create a directory named complaints_app
//  * b. Inside that directory, create app.js, index.html, and styles.css files
//  * c. Link them up, as well as the jQuery CDN library, and make sure all things are connected correctly!
//  * 
//  * 1. Users should be able to see five buttons for the five boroughs (manhattan, brooklyn, queens, staten island, bronx)
//  *    of New York City when they load the page.
//  * 
//  * 2. Users should also be able to see an input box where they can put in a number of how many complaints they want to see.
//  * 
//  * 3. When the user clicks on one of the five buttons, a list of complaints should be displayed on the page, 
//  *    according to the number they input AND the borough on which they clicked.
//  * 
//  * 4. If the user doesn't input any number, make the default be 10.
//  * 
//  * 5. Remember, also, they only want complaints that were handled by the NYPD! 
//  *    (hint: consider filtering for a specific "agency" when making the API call)
//  * 
//  * 6. When the list of complaints is shown, each complaint should also have 
//  *    a button on it that reads something along the lines of "toggle police response".
//  * 
//  * 7. When the user clicks on on the "toggle police response" button, 
//  *    it should then toggle how the police responded to that particular complaint.
//  *    Make sure it only toggles the response for that one complaint, not the entire list!
//  * 
//  *  *********************************************************************************************************************/


const test = (borough) => {
    let limit;
    !document.getElementById("numOfComplaints").value
      ? (limit = 10)
      : (limit = document.getElementById("numOfComplaints").value);
    let cont1 = document.getElementById("one");
    let ul1 = document.getElementById("complaints");
    let para = document.createElement("p");
    para.innerHTML = null;
    ul1.innerHTML = null;
    
    
    /* Create a variable that stores the url for the city API to retrieve complaints and NYPD responses by borough */ 
    let url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=${borough}&$limit=${limit}&$offset=0`;


  
    fetch(url)
      .then((data) => data.json())
      .then((res) => {
        let complaint = res.map((element) => element.complaint_type);
        let descriptor = res.map((element) => element.descriptor);
        let resolution = res.map((element) => element.resolution_description);
  
        for (let i = 0; i < res.length; i++) {
          let li = document.createElement("li");
          li.style.width = "80%";
          
          /***********************************************************
            Create a button element and set attributes with JavaScript
            https://www.w3schools.com/jsref/dom_obj_pushbutton.asp 
          ************************************************************/
          let button = document.createElement("button");
  
          button.style.background = "lightgray";
          button.style.color = "black";
          button.style.widows = "10%";
          button.style.marginInlineStart = "80px";
          button.style.alignSelf = "center";
          button.innerHTML = "NYPD Resolution";
          button.id = "toggle";
          
          /***********************************************************
           Adds a JavaScript HTML DOM Event Listener to button element
           https://www.w3schools.com/js/js_htmldom_eventlistener.asp
          ************************************************************/
          button.addEventListener("mouseover", function () {
            para.innerHTML = resolution[i];
            li.appendChild(para);
          });
          button.addEventListener("mouseout", function () {
            para.innerHTML = '';
            li.removeChild(para);
          });


          li.innerHTML = `${complaint[i]}: ${descriptor[i]}`  ;
          ul1.appendChild(li);
          ul1.appendChild(li).appendChild(button);
        }
        cont1.appendChild(ul1);
      });
  };
  
 


