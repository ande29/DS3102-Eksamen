const selectedGender = document.querySelector("#gender-select");
const nameInput = document.querySelector("#name-input");
const selectBtn = document.querySelector("#select-btn");
const userOutput = document.querySelector(".user-output");

let adminStorage = () => {
    let addAdming = [
    {
        name:"admin",
        gender: "netural"
    }
    ];
    localStorage.setItem("users", JSON.stringify(addAdming));      
}
( // immediately triggered arrow function	
	() => adminStorage()
)();

let addUser = () => {
    const name = nameInput.value;
    const gender = selectedGender.value;
    let message;
    
    if(name.length > 0){
        message = `<p>${name} og du er en ${gender}</p>`;
        storeUser(name, gender);
    }else{
        message = `<p style='color: red'> please select Gender and type in name`;
    }

    userOutput.innerHTML = message;


}
selectBtn.addEventListener("click", addUser)

let storeUser = (a,b) => {
    let userObj = [
        {
            name: a,
            gender: b,
        },
    ];
    
    let users = JSON.parse(localStorage.getItem("users"));

    users.push(userObj);

    localStorage.setItem("users", JSON.stringify(userObj));
}

