document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let user = document.querySelector("input[type='text']").value;
    let pass = document.querySelector("input[type='password']").value;
    
    if (user === "admin" && pass === "1234") {
        alert("Login Successful!");
    } else {
        alert("Invalid Credentials!");
    }
});
