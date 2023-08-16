const subBtn = document.querySelector(".sub-btn");
const container = document.querySelector(".container");
const successMsg = document.querySelector(".suc-msg");
const result = document.querySelector(".result");
const emailInput = document.querySelector(".email-input");

subBtn.addEventListener("click", openModal);

function openModal() {
    const email = emailInput.value.trim();
    const isValid = checkValid(email);
    
    if (isValid) {
        result.textContent = "Valid email.. wait for a second";
        result.style.color = "green";
        setTimeout(function() {
            container.style.display = "none";
            successMsg.style.display = "block";
        },2000);
        
    } else {
        emailInput.value = "";

        // Display the error message for 1 second (1000 milliseconds)
        result.textContent = "Valid email required";
        result.style.color = "red";

        setTimeout(function () {
            result.textContent = "";
        }, 4000);
        
    }
}

function checkValid(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}
