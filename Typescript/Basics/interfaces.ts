interface User {
    username: string;
    password: string;
    confirmPassword?:string; //Optional property => Does not have to be implemented
}

let user:User;

user = { username: 'Bill', password: 'secretpassword' };


interface CanDrive {
    accelerate(speed:number): void;
}

let car:CanDrive = {
    accelerate: function(speed:number){
        // ...
    }
}