const pass = document.getElementById("password");
const msg = document.getElementById("message");
const str = document.getElementById("strength");
const submit = document.getElementById("submit");

pass.addEventListener('input', () => {
    const val = pass.value;

    if (val.length > 0) {
        msg.style.display = "block";
    } 

    else {
        msg.style.display = "none";
    }

    if (val.length < 4) {
        str.textContent = "weak";
        pass.style.borderColor = "red";
        msg.style.color = "red";
    } 

    else if (val.length < 8) {
        str.textContent = "medium";
        pass.style.borderColor = "orange";
        msg.style.color = "orange";
    } 

    else if (val.length <= 15) {
        str.textContent = "strong";
        pass.style.borderColor = "green";
        msg.style.color = "green";
    } 
    
    else {
        str.textContent = "too long";
        pass.style.borderColor = "red";
        msg.style.color = "red";
    }
    
});

submit.addEventListener('click', (event) => {
    event.preventDefault();
    alert("Password submitted!");
    pass.value = "";
    pass.style.borderColor = "";
    msg.style.display = "none";
    str.textContent = "";
});

