function displayPoem(response) {
    console.log("poem generated");

   new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });   
}

function generatePoem(event) {
  event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "9f10fff250oc418ca1f028348d33b6at";
  let prompt = `user instructions: Generate African poem about ${instructionsInput.value}`;
  let context = "You are a culture poem expert and love to write short poems. Your mission is to generate a 5 line poem in basic HTML. Sign the poem with 'HBC AI' inside a <strong> element at the end of the poem. Make sure to follow the user instructions";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

  console.log("Generating-poem");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiURL).then(displayPoem);


}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);