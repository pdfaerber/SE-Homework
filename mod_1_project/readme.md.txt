/*********************************************************************************
 * Patrick D. Faerber, Cohort 13, Module One Project Homework, August 25, 2021
 *
 * Summary:
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
 ************************************************************************************
 * File Summary:
 * 3 HTML pages: index, contact, history
 * 2 .js files: image_id.js, plant.js, contact.js, mod_1_project.js
 * 2 .css files: styles.css, contact_styles.css
 * 8 .jpg files: [plant_1... plant_8.jpg]
 *
 * File construction:
 * 
 * CSS grid layout style is used in all HTML docs
 * Form post on contact.html is through FormSubmit.com
 * image_id.js uses a fetch "POST" method to post submit images to api for identification matching
 * plant.js uses a fetch "GET" method to retrieve a data response from the API
 ************************************************************************************/
