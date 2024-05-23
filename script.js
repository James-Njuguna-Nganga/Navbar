const navToggle = document.querySelector(".toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  console.log("Current classes:", links.classList);
  console.log("Contains 'show-links':", links.classList.contains("show-links"));
  if (!links.classList.contains("example-class")) {
    links.classList.add("example-class");
    console.log("Added 'example-class'");
  } else {
    console.log("'example-class' already present");
  }
  if (links.classList.contains("example-class")) {
    links.classList.remove("example-class");
    console.log("Removed 'example-class'");
  }
  links.classList.toggle("show-links");
  console.log("Toggled 'show-links':", links.classList.contains("show-links"));
});

