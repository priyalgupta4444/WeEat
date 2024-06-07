const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
//const signupLink = document.querySelector('#signup');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();

    $.getJSON("user.json",function (data) { 
        var flag=0; 
     
        // ITERATING THROUGH OBJECTS 
        $.each(data, function (key, value) { 
            if(usernameInput.value === value.username && passwordInput.value === value.password){
                alert("Login Successful! ");
                //form.submit();
                flag=1;
                window.location.href= "index2.html";
            }
        }); 
          
        //INSERTING ROWS INTO TABLE  
        if(flag =0)
            {
                alert("Invalid Username or Password :( ");
            }
    }); 

});

//signupLink.addEventListener('click', (e) => {
    //e.preventDefault();
    // redirect to signup page or show signup form
//});

function validateForm() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters');
        return;
    }

    // if validation passes, submit the form

   
}