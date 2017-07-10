class person{
    _firstname: string = "";
    enumerable: boolean = true;
    configurable: boolean = true;
    get firstname(){
        return this._firstname;
    }
    set firstname(value: string){
        this._firstname = value.toUpperCase();
    }    
}

const newperson = new person();
newperson.firstname="Asaad";
console.log(newperson.firstname);