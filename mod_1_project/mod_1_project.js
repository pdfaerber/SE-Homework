//plantID API Key:"-----------------------------------------------"
// document.getElementById("button").onclick = alert("button works")
document.getElementById("button").onclick = function sendIdentification() {
  const files = [...document.getElementById("plant_select").files];
  const promises = files.map((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const res = event.target.result;
        console.log(res);
        resolve(res);
      };
      reader.readAsDataURL(file);
    });
  });
  Promise.all(promises).then((base64files) => {
    console.log(base64files);

    const data = {
      api_key: "-----------------------------------------", //my plantID api key
      id,
      images: base64files,
      modifiers: ["crops_fast", "similar_images"],
      plant_language: "en",
      plant_details: [
        "common_names",
        "url",
        "edible_parts",
        "propagation_methods",
        "name_authority",
        "wiki_description",
        "taxonomy",
        "synonyms"
      ]
    };

    fetch("https://api.plant.id/v2/identify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
}; //close sendIdentification()
