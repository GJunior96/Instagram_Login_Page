// Functions to set values for the fields User and Password 
function typingU() {
    var name = document.getElementById('uname').value;
    document.getElementById('uname').setAttribute('value', name);
}

function typingP() {
    var password = document.getElementById("pass").value;
    document.getElementById('pass').setAttribute('value', password);
}

// Funciton to verify if fields are filled
function areFieldsFilled() {
    var isFilled = false;
    var name = document.getElementById("uname").value;
    var pass = document.getElementById("pass").value;

    if (name !== "" && pass !== "" && pass.length >= 6) {
        isFilled = true;  
    }
    return isFilled;
};

// Event Listener of sign button
document.addEventListener('input', function () {
    var result = areFieldsFilled();
    if (result == true) {
        toggleButtonOn("btn-change");
    } else {
        toggleButtonOff("btn-change");
    }

}, false);

// Functions to toggle buttons
function toggleButtonOn(idButton) {
    var button = document.getElementById(idButton);
    if(button.disabled) {
        button.disabled = !button.disabled;
    } 
};

function toggleButtonOff(idButton) {
    var button = document.getElementById(idButton);
    if (!button.disabled) {
        button.disabled = true;    
    }
};

// Function to verify if the field password is empty
function isPassFilled() {
    var isFilled = false;
    var pass = document.getElementById("pass").value

    if (pass !== "") {
        isFilled = true;
    }
    return isFilled
};

// Event Listener of show password button
document.addEventListener('input', function () {
    var result = isPassFilled();
    if (result == true) {
        toggleButtonOn("btn-hide");
    } else {
        toggleButtonOff("btn-hide");
    }
}, false);

// Function to show or hide password
document.getElementById("btn-hide").onclick = function() {
    if(document.getElementById("pass").getAttribute("type") == "password") {
        document.getElementById("pass").setAttribute("type", "text");
        document.getElementById("btn-hide").innerHTML = "ocultar";
        console.log("mostrou");
   } else {
       document.getElementById("pass").setAttribute("type", "password");
       document.getElementById("btn-hide").innerHTML = "mostrar";
       console.log("ocultou");
   }
};