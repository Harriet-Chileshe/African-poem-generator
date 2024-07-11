function displayReview(response) {
    console.log("safari-review generated");

   new Typewriter("#safari-review", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });   
}

function generatesafariReview(event) {
  event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "9f10fff250oc418ca1f028348d33b6at";
  let prompt = `user instructions: Generate African Safaris reviews ${instructionsInput.value}`;
  let context = "You are a tourist and safari expert and love to write reviews on safari destinations. Your mission is to generate a 10 line African safari top reviews,  include details on the price,current weather,list of adventures to take and location in basic HTML. Sign the safari review with 'HBC AI' inside a <strong> element at the end of the review. Make sure to follow the user instructions";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

  console.log("Generating-safari-review");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiURL).then(displayReview);


}

let safariFormElement = document.querySelector("#safari-generator");
safariFormElement.addEventListener("submit", generatesafariReview);