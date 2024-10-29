// Function to load a page via regular click/tap
function loadPage(pageID) {
    console.log("loadPage() is running");
    console.log("about to load: " + pageID);
    document.querySelector("#appNav").bringPageTop(pageID);
} // END loadPage()

// Function to open the side menu
function sideMenuOpen(menuID) {
    console.log("sideMenuOpen() is running");
    console.log("about to open side menu: " + menuID);
    document.querySelector(menuID).open();
} // END sideMenuOpen()

// Function to load a page via side menu navigation
function loadPageViaMenu(pageID) {
    console.log("loadPageViaMenu() is running", "about to open: " + pageID);
    document.querySelector("#customerMenu").close();
    document.querySelector("#appNav").bringPageTop(pageID);
} // END loadPageViaMenu()

// Function to log out of the account
function logOut() {
    console.log("logout() is running");
    ons.notification.confirm("Are you sure?").then(
        function(responze){
            console.log("the response was: " + responze);
            switch(responze){
                case 0:
                    console.log("They DON'T want to log out.");
                    break;

                case 1:
                    console.log("They DO WANT to log out");
                    document.querySelector("#customerMenu").close();
                    document.querySelector("#appNav").resetToPage("welcome.html");
                    break;

                case 99:
                    console.log("They want to clear the cart");
                    break;

                default:
                    console.log("Other option...");
                    break;
            } // END of switch()
        } // END of anonymous function in response
    ); // END .confirm() Promise
} // END logOut()

// Function to clear the Sign Up "Form"
function clearFormSignUp() {
    console.log("clearFormSignUp() is running");
    document.getElementById("signupEmail").value = "";
    document.getElementById("signupPWD").value = "";
    document.getElementById("signupPWDConf").value = "";
} // END clearFormSignUp

// Function to create a new account
function signUp() {
    console.log("signUp() is running");

    const strongPWD = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\!\@\#\$\^\*\;])(?=.{7,})");

    let valSignUpEmail = document.querySelector("#signupEmail").value,
        valSignUpPWD = document.querySelector("#signupPWD").value,
        valSignUpPWDConf = document.querySelector("#signupPWDConf").value;

    console.log(valSignUpEmail.length, valSignUpPWD, valSignUpPWDConf);

if(strongPWD.test(valSignUpPWD)) { 
    console.log("Password is STRONG");

                if(valSignUpEmail === "" || valSignUpPWD === "" || valSignUpPWDConf === "") {
                    console.log("At least one field is empty!");
                    ons.notification.alert("Please fill all fields!");
                } else {
                    console.log("Fields are not empty, proceed");
                    if(valSignUpPWD !== valSignUpPWDConf) {
                        console.log("Passwords don't match");
                        ons.notification.alert("Your passwords don't match!");
                        document.getElementById("signupPWD").value     = "";
                        document.getElementById("signupPWDConf").value = "";
                    } else {
                        console.log("Passwords DO match, proceed");
                        let tmpValSignUpEmail = valSignUpEmail.toLowerCase();
                        console.log(tmpValSignUpEmail);

                        if(localStorage.getItem(tmpValSignUpEmail) === null) {
                            console.log("New account detected");
                            // localStorage.setItem(tmpValSignUpEmail, valSignUpPWD);
                            ons.notification.alert("Account created!");
                            document.getElementById("signupPWD").value      = "";
                            document.getElementById("signupPWDConf").value  = "";
                            document.getElementById("signupEmail").value    = "";
                            clearFormSignUp();
                        } else {
                            console.log("Previous account detected");
                            ons.notification.alert("You already have an account!");
                        }  // END If..Else checking if Acct. exists
                    } // END If..Else checking if PWD match
                } // END If...Else checking for empty fields
    } else {
        console.log("Password is weak");
        ons.notification.alert("WEAK");
    } // If..Else check for strong password
} // END signUp()

// Function to log in to the app
function logIn() {
    console.log("logIn() is running");

    let valLoginEmail = document.querySelector("#loginEmail").value,
        valLoginPWD = document.querySelector("#loginPassword").value,
        tmpValLoginEmail = valLoginEmail.toLowerCase();
    console.log(tmpValLoginEmail, valLoginPWD);

    if(localStorage.getItem(tmpValLoginEmail) === null) {
        console.log("Account does not exist!");
        ons.notification.alert("No such account!");
    } else {
        console.log("Account DOES exist, proceed to check if PWDs match");
        if(valLoginPWD === localStorage.getItem(tmpValLoginEmail)) { 
            console.log("Passwords DO match, move to Home");
            document.querySelector("#appNav").resetToPage("homeCust.html");
        } else {
            console.log("Passwords DON'T match...");
            ons.notification.alert("Wrong password!");
        } // END If..Else check passwords match
    } // END If..Else account existance
} // END logIn()
