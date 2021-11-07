const selectedGender = document.querySelector("#gender-select");
const nameInput = document.querySelector("#name-input");
const selectBtn = document.querySelector("#select-btn");
const userOutput = document.querySelector(".user-output");


let adminStorage = () => {
    let addAdming = [
    {
        name: "",
        gender:"" 
    },
    ];
    localStorage.setItem("users", JSON.stringify(addAdming));      
}

if(localStorage.getItem("users")){
    addAdming = JSON.parse(localStorage.getItem("users"))
}else{
    (
        () => adminStorage()
    )();
}

let storeUser = () => {
    let message;
    let userObj = [
        {
            name: nameInput.value,
            gender: selectedGender.value,
        },
    ];
    
    if(nameInput.value.length > 0){
        let users = JSON.parse(localStorage.getItem("users"));
        users.push(userObj)
        localStorage.setItem("users", JSON.stringify(users));

        message = `<p>${nameInput.value} og du er en ${selectedGender.value}</p>`;
    }else{
        message = `<p style='color: red'> please select gender and type in name`;
    }
    userOutput.innerHTML = message;
}


selectBtn.addEventListener("click", storeUser);