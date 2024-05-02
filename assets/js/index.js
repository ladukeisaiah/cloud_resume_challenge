//This code is for the counter feature with the API from Lambda
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://gh6l2hlnnmw5ipkvru5o4xxewq0sqoot.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();