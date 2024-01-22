// Part 2 - The Closure Function
function bankAccount(ownerName) {
    // Local variables
    let balance = 0;
    let owner = ownerName;

    // Return an object with methods
    return {
        withdrawal: function(withdrawalAmount) {
            if (withdrawalAmount > 0 && withdrawalAmount <= balance) {
                balance -= withdrawalAmount;
                updateAccountInfo();
            } else {
                alert("Invalid withdrawal amount.");
            }
        },
        deposit: function(depositAmount) {
            if (depositAmount > 0) {
                balance += depositAmount;
                updateAccountInfo();
            } else {
                alert("Invalid deposit amount.");
            }
        },
        getBalance: function() {
            return balance;
        },
        getOwnerName: function() {
            return owner;
        }
    };
}

// Part 1 - The UI
function enterName() {
    const name = prompt("Enter your name:");
    if (name) {
        currentAccount = bankAccount(name);
        updateAccountInfo();
    }
}

function deposit() {
    if (currentAccount) {
        const amount = parseFloat(prompt("Enter the deposit amount:"));
        if (!isNaN(amount)) {
            currentAccount.deposit(amount);
        } else {
            alert("Invalid input. Please enter a valid number.");
        }
    } else {
        alert("Please enter your name first.");
    }
}

function withdraw() {
    if (currentAccount) {
        const amount = parseFloat(prompt("Enter the withdrawal amount:"));
        if (!isNaN(amount)) {
            currentAccount.withdrawal(amount);
        } else {
            alert("Invalid input. Please enter a valid number.");
        }
    } else {
        alert("Please enter your name first.");
    }
}

function updateAccountInfo() {
    document.getElementById("ownerName").innerText = "Owner: " + currentAccount.getOwnerName();
    document.getElementById("balance").innerText = "Balance: $" + currentAccount.getBalance().toFixed(2);
}

let currentAccount; // Holds the current bank account

// Initial prompt for entering name
enterName();

