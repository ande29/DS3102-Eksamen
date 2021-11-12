const selectedGender = document.querySelector("#gender-select");
const nameInput = document.querySelector("#name-input");
const selectBtn = document.querySelector("#select-btn");
const userOutput = document.querySelector(".user-output");


/*let adminStorage = () => {
    let addAdming = [
    {
        name: "",
        gender:"" 
    },
    ];
    localStorage.setItem("users", JSON.stringify(addAdming));      
}*/
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
        userObj.push({name:nameInput.value, gender:selectedGender.value});
        localStorage.setItem("users", JSON.stringify(userObj));
        message = `<p>${nameInput.value} og du er en ${selectedGender.value}</p>`;
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