/*
Program Name:patient-form.html
    Author:Avery Herrera
    Date created:09/08/2025
    Date last edited:
    Version:1.0
    Description: Patient registration form for Homework 1 JS
*/

//dynamic date js code//
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//range slider js code
let slider= document.getElementById("range")
    let output = document.getElementById("range-scale")
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value;};

//first name validation code
function validateFname() {
    fname = document.getElementById("fname").value;
    var namePattern = /^[a-zA-Z'-]+$/;

    if(fname == "") {
        document.getElementById("fname-error").innerHTML = "First name cannot be empty.";
        return false;
    } else if (!namePattern.test(fname)) {
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and hyphens only.";
        return false;
    } else if (fname.length < 2) {
        document.getElementById("fname-error").innerHTML = "First name must be at least 2 characters long.";
        return false;
    } else if (fname.length > 30) {
        document.getElementById("fname-error").innerHTML = "First name must be less than 30 characters long.";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}

//middle initial validation code
function validateMiIn() {
    let MiIn = document.getElementById("MiIn").value.trim().toUpperCase();
    document.getElementById("MiIn").value = MiIn;
    var namePattern = /^[A-Z]$/;
    if(MiIn == "") {
        document.getElementById("MiIn-error").innerHTML = "";
        return true;
    }
      else if (!namePattern.test(MiIn)) {
        document.getElementById("MiIn-error").innerHTML = "Middle initial must be a single upper case letter.";
        return false;
    } else {
        document.getElementById("MiIn-error").innerHTML = "";
        return true;
    }
}

//last name validaiton code
function validateLname() {
    lname = document.getElementById("lname").value;
    var namePattern = /^[a-zA-Z'-]+$/;

    if(lname == "") {
        document.getElementById("lname-error").innerHTML = "Last name cannot be empty.";
        return false;
    } else if (!namePattern.test(lname)) {
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and hyphens only.";
        return false;
    } else if (lname.length < 2) {
        document.getElementById("lname-error").innerHTML = "Last name must be at least 2 characters long.";
        return false;
    } else if (lname.length > 30) {
        document.getElementById("lname-error").innerHTML = "Last name must be less than 30 characters long.";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}

//dob validation code
function validateDob() {
    dob=document.getElementById("dob");
    if (dob.value =="") {
        document.getElementById("dob-error").innerHTML = 
        "Date of Birth cannot be empty.";
        return false;
    }

    let date = new Date(dob.value);
    let today = new Date();
    let maxDate = new Date();
    maxDate.setFullYear(today.getFullYear()-120);

    if (date > today) {
        document.getElementById("dob-error").innerHTML =
        "Date cannot be in the future.";
        dob.value="";
        return false;

    }else if(date < maxDate) {
        document.getElementById("dob-error").innerHTML = 
        "Date cannot be more than 120 years ago."
        dob.value="";
        return false;
    }else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
    
}
//ssn validation code
function validatessn() {
    const ssn = document.getElementById("ssn");
    const ssnError = document.getElementById("ssn-error");

    let digits = ssn.value.replace(/\D/g, "");

    let formatted = "";
    if (digits.length > 0) formatted += digits.substring(0,3);
    if (digits.length >= 4) formatted += "-" + digits.substring(3,5);
    if (digits.length >= 6) formatted += "-" + digits.substring(5,9);

    ssn.value = formatted;

    //regular express for ssn pattern
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;
    if (!ssnR.test(formatted)) {
        ssnError.innerHTML= 
        "Social Security Number must be exactly 9 digits.";
        return false;
    }else {
        ssnError.innerHTML= "";
        return true;
    }
}
//address1 validation code
function validateAddress1() {
    var ad1 = document.getElementById("address1").value;
    console.log(ad1);
    console.log(ad1.length);

    if (ad1.length < 2) {
        document.getElementById("address1-error").innerHTML=
        "Please enter valid address";
        return false;
    }else {
        document.getElementById("address1-error").innerHTML ="";
        return true;
    }
}

function validateCity () {
    var city = document.getElementById("city").value.trim();

    if(!city) {
        document.getElementById("city-error").innerHTML = "City cannot be empty.";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

//zip code validation code
function validateZcode() {
    const zipInput = document.getElementById("zcode");
    let zip = zipInput.value.replace(/[^\d-]/g, "") //removes non-number and non-dash characters

    if (!zip) {
        document.getElementById("zcode-error").innerHTML =
        "Zip code cannot be left blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0,5);//remove all digits after first 5
    }

    zipInput.value = zip;
    document.getElementById("zcode-error").innerHTML="";
    return true;
}


//email validation code
function validateEmail() {
    const email = document.getElementById("email").value;
    const emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   //rejects pattern for email  

    if (email == "") {
        document.getElementById("email-error").innerHTML=
        "Email cannot be empty";
        return false;

    }else if (!email.match(emailR)){
        document.getElementById("email-error").innerHTML =
        "Please enter a valid email address";
        return false;
    }else {
        document.getElementById("email-error").innerHTML= "";
        return true;
    }

}

//phone number validation
function validatepnumber(){
    const phoneInput = document.getElementById("pnumber");
    const phoneError = document.getElementById("pnumber-error");
    const phone = phoneInput.value.replace(/\D/g, ""); //removes non-number characters

    if (phone.length !==10) {
        phoneError.innerHTML = "Please enter valid phone number";
        return false;
    }

    const formattedPhone =
    phone.slice(0,3) + "-" + phone.slice(3,6) + "-" +phone.slice(6,10);
    phoneInput.value = formattedPhone;
    phoneError.innerHTML= "";
    return true;
}

//username validation code
function validateuserid() {
    const useridInput = document.getElementById("userid");
    
    //displays lowercase
    let userid = useridInput.value.toLowerCase();
    useridInput.value = userid;


    const userError = document.getElementById("userid-error");

    //validation checks
    if(userid.length == 0) {
        userError.innerHTML = "Username field cannot be empty";
        return false;

    }
    // checks username does not start with number
    if(!isNaN(userid.charAt(0))) {
        userError.innerHTML = "Username cannot begin with a number";
        return false;
    }

    //checks that username consists of only letters, numbers, or underscores
    let regex = /^[a-zA-Z0-9_]+$/;
    if (!regex.test(userid)) {
        userError.innerHTML = "Username can only contain letters, numbers, or underscores";
        return false;

    }else if(userid.length < 5) {
        userError.innerHTML = "Username must be at least 5 characters";
        return false;
    }
    
    //checks for length of username (30 characters or less)
    else if(userid.length > 30) {
        userError.innerHTML =  "Username cannot be more than 30 characters";
        return false;
    } 
    else{ //this mean the username is valid
       userError.innerHTML = "";
        return true;
    }

}

//password validation code
function validatepwd() {
    const pwd = document.getElementById("pwd").value;
    const userid = document.getElementById("userid").value;
    //Intializing array for errors
    let errorMessage= [];
    //check for lowercase letters
    if(!pwd.match(/[a-z]/))
        errorMessage.push("Enter at least one lowercase letter");
    //check for uppercase letters
    if(!pwd.match(/[A-Z]/)) 
        errorMessage.push("Enter at least one uppercase letter");
    //check for numbers
    if(!pwd.match(/[0-9]/)) 
        errorMessage.push("Enter at least one number");
    //check for special characters
    if(!pwd.match(/[!\@#\$%&*\-_\\.+\(\)]/)) 
        errorMessage.push("Enter at least one special character");
    //check password is not using the username
    if(pwd == userid || pwd.includes(userid))
        errorMessage.push("Password cannot contain username");

    //display error messages if any
    const errorContainer = document.getElementById("pwd-error");

    if (errorMessage.length > 0) {
        errorContainer.innerHTML = errorMessage.join("<br>");
        return false;
        } else {
            errorContainer.innerHTML = "";
            return true;
        }
}

//confirm password validation code
function validateconfirmpwd() {
    let pwd1 = document.getElementById("pwd").value;
    let pwd2= document.getElementById("confirmpwd").value;

    const errorContainer = document.getElementById("confirmpwd-error");

    if(pwd1 == "" || pwd2 == "") {
        errorContainer.innerHTML = "";
        return false;
    }

    if (pwd1 != pwd2) {
        errorContainer.innerHTML = "Passwords do not match";
        return false; 
    }else {
       errorContainer.innerHTML = "Passwords match";
       errorContainer.className ="success";
       return true;
    }

}

//redisplay user input to the user (review button)
function reviewInput() {

   validatepwd();
   validateconfirmpwd();

   const pwdErrors = document.getElementById("pwd-error").innerHTML;
   const confPwdErrors = document.getElementById("confirmpwd-error").innerHTML;

   if (pwdErrors || confPwdErrors.includes("do not match")) {
    return;
   }
   const formcontent = document.getElementById("signup");
   let formoutput = 
    "<table class='output'>" +
    "<tr>" +
    "<th colspan='2'>Please Review Patient's Information</th>" +
    "<th style='text-align:right;'>" +
    "<button type='button' class='close-review-btn' onclick='removeReview()'>✖</button>" +
    "</th>" +
    "</tr>";
   
   for (let i =0; i < formcontent.elements.length; i++) {
        let formEl = formcontent.elements[i];
        if(formEl.value !="") {
            let datatype = formEl.type;

            switch (datatype) {
                case "checkbox":
                    if(formEl.checked) {
                        formoutput += "<tr><td align='right'>" + formEl.name + "</td>";
                        formoutput += "<td class='outputdata'>" + (formEl.checked ? "Yes" : "No") + "</td></tr>";
                    }
                    break;
                case "radio":
                    if(formEl.checked) {
                        formoutput += "<tr><td align='right'>" + formEl.name + "</td>";
                        formoutput += "<td class='outputdata'>" + formEl.value +"</td></tr>";
                    }
                    break;

                case "button":
                case "submit":
                case "reset":
                    break;

                default:
                    let label = formEl.name;
                    switch(label) {
                        case "fname": label = "First Name:";
                        break;
                        case "MiIn": label = "Middle Initial:";
                        break;
                        case "lname": label = "Last Name:";
                        break;
                        case "gender": label = "Gender:";
                        break;
                        case "dob": label = "Date of Birth:";
                        break;
                        case "ssn": label ="Social Security Number";
                        break;
                        case "address1": label = "Address 1:";
                        break;
                        case "address2": label = "Address 2:";
                        break;
                        case "city": label = "City:";
                        break;
                        case "state": label = "State:";
                        break;
                        case "zcode": label = "Zip Code:";
                        break;
                        case "email": label = "Email:";
                        break;
                        case "pnumber": label = "Phone Number:";
                        break;
                        case "textarea": label = "Pre-exsiting conditions:";
                        break;
                        case "range": label = "Urgency for appointment:";
                        break;
                        case "userid": label = "User Name:";
                        break;
                        case "pwd": label = "Password:";
                        break;
                        case "confirmpwd": label = "Confirmed Password:";
                        break;

                    }
                    formoutput += "<tr><td align='right'>" + label+ "</td>";
                    formoutput += "<td class= 'outputdata'>" + formEl.value + "</td></tr>";
            }
        }
    }
   if(formoutput.length>0) {
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
    document.getElementById("showInput").style.display = "block";
    }
   }
//remove user input
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
    document.getElementById("showInput").style.display = "none";
}

//shows alert box when necessary code
function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display = "none";
    }
}

function validateEverything() {
    let valid = true;

    if(!validateFname()) {
        valid = false;
    }
    if(!validateMiIn()) {
        valid = false;
    }
    if(!validateLname()) {
        valid = false;
    }
    if(!validateDob()) {
        valid = false;
    }
    if(!validatessn()) {
        valid = false;
    }
    if(!validateAddress1()) {
        valid = false;
    }
    if(!validateCity()) {
        valid = false;
    }
    if(!validateZcode()) {
        valid = false;
    }
    if(!validateEmail()) {
        valid = false;
    }
    if(!validatepnumber()) {
        valid = false;
    }
    if(!validateuserid()) {
        valid = false;
    }
    if(!validatepwd()) {
        valid = false;
    }
    if(!validateconfirmpwd()) {
        valid = false;
    }
    if (valid) {
        document.getElementById("submit").disabled = false;
    }else {
        showAlert();
    }
}

function setCookie (name, Cvalue, exdays) {
    var day = new Date();
    day.setTime(day.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + Cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for(var i = 0; i< cookies.length; i++){
        var c = cookies[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cookieName) == 0) {
            return c.substring(cookieName.length, c.length);
        }
    }  
    return "";
}

var inputs = [
    {id:"fname", cookieName: "fnameCookie"},
    {id:"MiIn", cookieName: "MiInCookie"},
    {id:"lname", cookieName: "lnameCookie"},
    {id:"dob", cookieName: "dobCookie"},
    {id:"ssn", cookieName: "ssnCookie"},
    {id:"address1", cookieName: "address1Cookie"},
    {id:"city", cookieName: "cityCookie"},
    {id:"zcode", cookieName: "zcodeCookie"},
    {id:"email", cookieName: "emailCookie"},
    {id:"pnumber", cookieName: "pnumberCookie"},
    {id:"userid", cookieName: "useridCookie"},

]

const rememberBox = document.getElementById("rememberMe");

inputs.forEach(function(input) {
    var inputElement = document.getElementById(input.id);

    let IsValue = localStorage.getItem(input.id);
    if(IsValue !== null) {
        inputElement.value = IsValue;
    }

    //prefill input field with cookie value if it exists
    var cookieValue = getCookie(input.cookieName);
    if (cookieValue != "" && !IsValue) {
        inputElement.value = cookieValue;
    }

    //set cookie on input change
    inputElement.addEventListener("input", function(){
        //always save to local storage
        localStorage.setItem(input.id, inputElement.value);

        if(rememberBox.checked) {
            setCookie (input.cookieName, inputElement.value, 30);
        }
    });

});

//Remember me checkbox preference
rememberBox.addEventListener("change", function() {
    if(!rememberBox.checked) {
        //user does not want to be remembered
        inputs.forEach(i => setCookie(i.cookieName, "",-1));
    } else {
        inputs.forEach(input => {
            let val = document.getElementById(input.id).value;
            setCookie(input.cookieName,val,30);
        });
    }
});

//greet user with name + message from cookie
var fnameCookie = getCookie("fnameCookie");
if (fnameCookie != "") {
    document.getElementById("Welcome1").innerHTML = "Welcome back, " + fnameCookie + "! </br>";
    document.getElementById("Welcome2").innerHTML = "<a href='#' id='new-user'>Not " + fnameCookie + "? Click here to start a new form. </a>";
    document.getElementById("new-user").addEventListener("click", function(){
        inputs.forEach(input => {
            setCookie (input.cookieName, "", -1); //delete cookie by setting expiration to past date
            localStorage.removeItem(input.id);
        });
        location.reload(); //reload page to clear form
    })
}

async function loadStates() {
    const dropdown = document.getElementById("state");

    try {
        const response = await fetch("states.json");

        if(!response.ok) {
            throw new Error("file failed to load.");
        }

        const data = await response.json();

        dropdown.innerHTML = "";

        data.states.forEach(state => {
            let option = document.createElement("option");
            option.value = state;
            option.textContent = state;
            dropdown.appendChild(option);
        });  
    } catch (error) {
        console.error("Fetch error:", error);
        dropdown.innerHTML = "<option>Error loading states</option>";
    }
}

loadStates();