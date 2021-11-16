const nameInput = document.querySelector("#name-input");
const selectBtn = document.querySelector(".quiz__start-btn");
const userOutput = document.querySelector(".user-output");


let userObj = [];

if(localStorage.getItem("users")){
    userObj = JSON.parse(localStorage.getItem("users"))
}else{
        userObj;
}

let storeUser = () => {
    getUserInfo;

    let users = JSON.parse(localStorage.getItem("users"));

}

const getUserInfo = () => {
    if(nameInput.value.length > 0){
        userObj.push({name: nameInput.value});
        localStorage.setItem("users", JSON.stringify(userObj));
        message = `<p>lykke til ${nameInput.value}</p>`;
    }else{
        message = `<p style='color: red'> please select gender and type in name`;
    }
    userOutput.innerHTML = message;
    console.log(userObj);
}

/*let storeuser = () => {
    let message;
    let userObj = [
        {
            name: nameInput.value,
            gender: selectedGender.value,
        }
    ];
    if(nameInput.value.length > 0){
        let users = JSON.parse(localStorage.getItem("users"));
        users.push(userObj)
        localStorage.setItem("users", JSON.stringify(users));
    }else{
    message = `<p style='color: red'> please select gender and type in name`;
    }
    userOutput.innerHTML = message;
}   */
selectBtn.addEventListener("click", getUserInfo);