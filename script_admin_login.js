document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        document.getElementById("errorMsg").innerHTML = "All fields are required.";
    } else {
        // Add your own validation logic here
        if (username !== "Litchiere" || password !== "Litchiere@123") {
            document.getElementById("errorMsg").innerHTML = "Invalid username or password.";
        } else {
            // Redirect to admin dashboard or perform other actions
            alert("Login successful!");
            window.location.href= "Admin_nextpage.html";
        }
    }
});