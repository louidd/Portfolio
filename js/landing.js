let userIsLogin = sessionStorage.getItem("user"); // Consistent key

if (!userIsLogin) {
    alert("Please Login First!");
    window.location = "index.html";
}

let logout = document.querySelector(".logout-btn"); // Get the logout button

logout.addEventListener("click", function() {
    sessionStorage.removeItem("user"); // Remove user from session
    window.location = "index.html"; // Redirect to login
});
