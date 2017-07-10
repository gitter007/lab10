
interface Account {
    money:number;

}
class bankAccount implements Account{ 
    money: 2000;
    deposit(value:number){
        this.money +=value;
    }        
};


let myself: {name: string, bankAccount: bankAccount, hobbies: [string,string]}={
    name: "Asaad",
    bankAccount: new bankAccount(),
    hobbies: ["Violin", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);



