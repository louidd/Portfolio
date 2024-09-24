let username = document.getElementById("username");
let password = document.getElementById("password");
let login = document.getElementById("login");
let userIsLogin = sessionStorage.getItem("user");

let data = [
    {
        "username": "Louid",
        "password": "123"
    },
    {
        "username": "Lan",
        "password": "123" // Make sure this is a string
    }
];

// Session for data
if (userIsLogin) {
    alert("Please Logout First!");
    window.location = "landing.html";
}

login.addEventListener("click", function() {
    if (checkLogin(username.value, password.value)) {
        // Set Storage for login 
        sessionStorage.setItem("user", username.value); // Use username.value

        window.location = "landing.html";
    } else {
        alert("Invalid Credentials!!");
    }
});

function checkLogin(user, pass) { // Rename parameters for clarity
    let isExist = false;

    for (let i = 0; i < data.length; i++) {
        if (data[i].username === user && data[i].password === pass) { // Use parameters instead of undeclared variables
            isExist = true;
            break;
        }
    }
    return isExist;
}
