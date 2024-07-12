function displayListing(response) {
  new Typewriter("#safari-listing", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatesafariListing(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "9f10fff250oc418ca1f028348d33b6at";
  let prompt = `user instructions: Generate African Safari listing ${instructionsInput.value}`;
  let context =
    "You are a tourist and safari expert and love to write on safari destinations. Your mission is to generate a list 2 top safaris in any African country,please include details on the safari's current price,location in that country(town),current weather and the list of adventures to take in basic HTML. If a country been searched has no safaris kindly indicate no safaris in this country.Sign the safari listing at the end with 'HBC AI' inside a <strong> element at the end of the review. Auto-correct names of countries that may be misspelled in search. Make sure to follow the user instructions";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let safariListingElement = document.querySelector("#safari-listing");
  safariListingElement.classList.remove("hidden");
  safariListingElement.innerHTML = `<div class="blink">⏳ Generating Safaris in ${instructionsInput.value}.....</div>`;

  axios.get(apiURL).then(displayListing);
}

let safariFormElement = document.querySelector("#safari-generator");
safariFormElement.addEventListener("submit", generatesafariListing);
