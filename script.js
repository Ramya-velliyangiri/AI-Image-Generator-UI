const button = document.getElementById("generate-btn");
const promptInput = document.getElementById("prompt");
const imageBox = document.getElementById("image-box");
const historyDiv = document.getElementById("history");
const toast=document.getElementById("toast")

button.addEventListener("click", () => {

    const prompt = promptInput.value;

    if(prompt === ""){
        imageBox.innerHTML = "Please enter a prompt!";
    }
    
else{

    imageBox.innerHTML = '<div class="loader"></div>';

    setTimeout(() => {

    const imageUrl = "https://picsum.photos/400/300";

    imageBox.innerHTML = `
        <img
        src="${imageUrl}"
        alt="Generated Image">
    `;

    const historyImage = document.createElement("img");

    historyImage.src = imageUrl;

    historyDiv.prepend(historyImage);
    toast.textContent =
    "Image Generated Successfully!";

toast.style.opacity = "1";

setTimeout(() => {

    toast.style.opacity = "0";

}, 2000);

}, 2000);

        
}});
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeBtn.innerHTML = "☀️";
    }else{
        themeBtn.innerHTML = "🌙";
    }

});
const downloadBtn = document.getElementById("download-btn");

downloadBtn.addEventListener("click", () => {

    const image = document.querySelector(".image-box img");

    if(image){

        const link = document.createElement("a");

        link.href = image.src;

        link.download = "ai-image.jpg";

        link.click();

    }else{

        alert("Generate an image first!");

    }

});
const randomBtn = document.getElementById("random-btn");
const prompts =[
    "A cat wearing a sunglasses",
    "A futuristic city at night",
    "A dragon flying over mountains",
    "A robot cooking food",
    "A space station on Mars"

];
randomBtn.addEventListener("click",() => {
    const randomIndex = Math.floor(Math.random() * prompts.length)
    promptInput.value = prompts[randomIndex];
    
});
const promptCards =
    document.querySelectorAll(".prompt-card");

promptCards.forEach((card) => {

    card.addEventListener("click", () => {

        promptInput.value = card.textContent;

    });

});

