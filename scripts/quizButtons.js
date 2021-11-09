const athleteButton = document.querySelector(".athlete-button");
const plButton = document.querySelector(".PL-button");
const closeButton = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");


const testButton = () => {
    alert();
}

const openModal = () => { modal.classList.toggle("open-modal") };

plButton.addEventListener("click", openModal);
athleteButton.addEventListener("click", openModal);
closeButton.addEventListener("click", openModal);

