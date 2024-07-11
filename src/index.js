
function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Drums the heartbeat of Africa",
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);