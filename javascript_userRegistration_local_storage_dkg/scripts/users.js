var users = JSON.parse(localStorage.getItem("users")) || [];
var userTable = document.getElementById("userList");

var tableHeader = document.createElement("tr");
var indexHeader = document.createElement("th");
var usernameHeader = document.createElement("th");
var emailHeader = document.createElement("th");

indexHeader.textContent = "Index";
usernameHeader.textContent = "Username";
emailHeader.textContent = "Email";

tableHeader.appendChild(indexHeader);
tableHeader.appendChild(usernameHeader);
tableHeader.appendChild(emailHeader);

userTable.appendChild(tableHeader);

users.forEach((user, index) => {
    var row = document.createElement("tr");

    var indexCell = document.createElement("td");
    var usernameCell = document.createElement("td");
    var emailCell = document.createElement("td");

    var usernameStrong = document.createElement("strong");
    var emailStrong = document.createElement("strong");

    usernameStrong.textContent = user.username;
    emailStrong.textContent = user.email;

    indexCell.textContent = index + 1;

    usernameCell.appendChild(usernameStrong);
    emailCell.appendChild(emailStrong);

    row.appendChild(indexCell);
    row.appendChild(usernameCell);
    row.appendChild(emailCell);

    userTable.appendChild(row);
});
