document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;
        const dob = document.getElementById("dob").value;
        const address = document.getElementById("address").value;

        // Add validation logic here
        if (name === "" || username === "" || password === "" || email === "" || mobile === "" || mobile.length != 10 || password.length < 8) {
            document.getElementById("errorMsg").innerHTML = "Invalid.";
        }
        else {
                const user = {
                    name: name,
                    username: username,
                    pass: password,
                    email: email,
                    mob: mobile,
                    address: address
                };

                fetch('/add-user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            alert('Signup succressful!');
                        } else {
                            alert('Failed to signup :( .');
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            
            
        
         }

       });
    }); 
