function createBankAccount(initialBalance=0){
    let balance= initialBalance;
    let transactionHistory=[]
    function isValidAmount(amount){
        if(typeof amount !== "number" || isNaN(amount)){
            return "Invalid amount"
        }
    if(amount<=0){
        return "Amount should be greater thn 0"
    }
    return null
    }
}
return{
    deposit(amount){
        const error= isValidAmount(amount)
        if(error) return error
        balance += amount;
        transactionHistory.push({
            type: "deposit",
            amount,
            date: new Date()
        })
        return "successfully deposit${amount}"
    },
    withdraw(amount){
        const error= isValidAmount(amount)
        if(error) return error
        if(amount>balance){
            return "insufficent balance"
        }
        balance -= amount
        transactionHistory.push({
            type: "withdraw",
            amount,
            date: new Date()
        })
        return `successfully withdrw ${amount}`
    },
    getBalance(){
        return balance
    },
    getTransactionHistory(){
        return [...transactionHistory]
    }
}

const account = createBankAccount(1000);

console.log(account.deposit(500))
console.log(account.withdraw(200))
console.log(account.getBalance())
console.log(account.getTransactionHistory())


