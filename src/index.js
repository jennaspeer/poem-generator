function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Insert Poem",
    autoStart: true,
    cursor: "",
    delay: "natural",
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
