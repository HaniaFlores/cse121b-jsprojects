const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://placeimg.com/200/200/animals");
newImage.setAttribute("alt", "Description of image");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>";
document.body.appendChild(newSection);

const newSec = document.createElement("sec");
const newH2 = document.createElement("h2");
newH2.innerText = "CSE 121b";
newSec.appendChild(newH2);

const newP = document.createElement("p");
newP.innerText = "Welcome to Javascript Language";
newSec.appendChild(newP);

document.body.appendChild(newSec);

