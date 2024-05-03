
document.getElementById("userRegss").addEventListener("submit", function(event){
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
        username: username,
        email: email,
        password: password
    };

    var users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "show_user.html";
});