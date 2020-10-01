  
/* Fill your code*/

// Blog Class to create Re-usabe code
class Blog {
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }
  addTitle() {
    let title_card = document.createElement("h1");
    title_card.setAttribute("id", "blog-title");
    console.log(title_card);
    document.getElementById("card-text").appendChild(title_card);

    title_card.innerHTML += this.title;
  }
  addDescription() {
    let description = document.createElement("p");
    description.setAttribute("id", "blog-description");
    console.log(description);
    document.getElementById("card-text").appendChild(description);
    description.textContent = this.detail;
  }
  addImage() {
    let image = document.createElement("img");
    image.setAttribute("src", "./assets/java card image.svg");
    console.log(image);
    document.getElementById("flashcard").appendChild(image);
  }
}

//Event listener - Add New Post, popup visible

const addBlog = document.getElementById("addBlog");
addBlog.addEventListener("click", () => {
  const popup = document.querySelector("div#popupContact");
  popup.style.display = "Block";
});

//Submit Button - New object is created and content is added
const submit = document.getElementById("post");
submit.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const des = document.getElementById("detail").value;
  console.log(title, des);
  const newBlog = new Blog(title, des);
  newBlog.addImage();
  newBlog.addTitle();
  newBlog.addDescription();
});

// X - close the POP up

document.getElementById("close").addEventListener("click", () => {
  const popup = (document.querySelector("div#popupContact").style.display =
    "none");
});