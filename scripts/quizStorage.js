const nameInput = document.querySelector("#name-input");

let userObj = [];

if(localStorage.getItem("users")){
    userObj = JSON.parse(localStorage.getItem("users"))
}else{
    userObj;
};

const getUserInfo = () => {
        userObj.push({name: nameInput.value});
        localStorage.setItem("users", JSON.stringify(userObj));
    console.log(userObj);
};

export default getUserInfo;