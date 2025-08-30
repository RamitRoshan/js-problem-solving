function BankAccount(aNumber, aName, aBalance){
    //this -{}
    this.accountNumber = aNumber;
    this.accountHolderName = aName;
    this.balance = aBalance;

    //return this;
}
BankAccount.prototype.getBalance = function(){
    return `${this.accountHolderName} has balance of INR ${this.balance}`;
}


//define a displayAccountInfo() methods - Prints the account number, holder's name, and balance
BankAccount.prototype.displayAccountInfo = function(){
    return `${this.accountNumber} - ${this.accountHolderName} - INR ${this.balance}`;
}

//Deposit(amount) - adds the given amount to the account balance, amount must be positive, if user gives
// negative number then it says enter a positive number
BankAccount.prototype.addDepositAmount = function(amount){
    if(amount >0){
        this.balance = this.balance+amount;
        return `Deposit successfully! Now new balance is: INR ${this.balance}`;
        // return this.balance;
    }else{
        return 'amount should be a positive number';
    }
}

//WithDraw(amount)- Deduct the amount from the account balance. ensure sufficient funds before withdraws
BankAccount.prototype.withdrawDepositAmount = function(amount){
    if(amount > this.balance){
        return 'insufficient amounts';
    }else{
        this.balance -= amount;
        return this.balance;
    }
    // if(amount > 0 && amount <= this.balance){
    //     this.balance -= amount;
    //     return `Withdraw successfully!!! Now new balance is: INR ${this.balance}`;
    // }else{
    //     return 'insufficient amounts'
    // }
    
}



const c1 = new BankAccount('SBI123', 'jeevan', 1000);

console.log(c1);
console.log(c1.getBalance());

//Prints the account number, holder's name, and balance
console.log(c1.displayAccountInfo());

//Deposit(amount) 
console.log(c1.addDepositAmount(500));  //Deposit successfully! Now new balance is: INR 2100
console.log(c1.addDepositAmount(-100));
console.log(c1.getBalance()); //1500


//WithDraw(amount)
console.log(c1.withdrawDepositAmount(100));



 
