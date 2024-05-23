function createParagraph() {

    console.log("Button clicked!");

    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
}
  
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}
  
  