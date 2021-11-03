const selectedGender = document.querySelector("#gender-select");
const nameInput = document.querySelector("#name-input");
const selectBtn = document.querySelector("#select-btn");
const userOutput = document.querySelector(".user-output");



let addUser = () => {
    const name = nameInput.value;
    const gender = selectedGender.value;
    let message;

    if(name.length > 0){
        message = `
        <p>${name} og du er en ${gender}</p>`;
        storeUser;
    }else{
        message = `<p style='color: red'> please select Gender and type in name`;
    }
    userOutput.innerHTML = message;


}
selectBtn.addEventListener("click", addUser)

let storeUser = () => {
    let userObj = [
        {
            name: nameInput.value,
            gender: selectedGender.value,
        },
    ];
        localStorage.push(userObj);
        localStorage.setItem("Users", JSON.stringify(userObj));
}

