const inputEl = document.querySelector("#userName");
console.log("input", inputEl);
const parE1 = document.querySelector("welcomeMsg");

inputEl.addEventListener("change", (e)=>{
    parE1.innerHTML = "Welcome " + e.target.value;
});