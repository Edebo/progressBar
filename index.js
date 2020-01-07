const progress = document.querySelector(".progress-done");

//to pause a loop
const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

//loop function with pause or delay
async function loopFunction() {
  for (i; i <= 100; i++) {
    progress.textContent = i.toString() + "%";
    progress.style.width = i + "%";

    i !== 100 ? await sleep(500) : null;
  }
  progress.textContent = "100% Completed";
}

progress.style.opacity = 1;

//   progress.style.width = progress.getAttribute("data-done") + "%";
let i = +progress.getAttribute("data-done");

//running the loop function
loopFunction();
