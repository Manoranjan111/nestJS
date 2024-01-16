import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private fakeUsers = [
        {name: "kanan", email: "kanan@gmail.com"},
        {name: "preetam", email: "preetam@gmail.com"},
        {name: "saksham", email: "saksham@gmail.com"},
        {name: "sachin", email: "sachin@gmail.com"},
        {name: "akash", email: "akash@gmail.com"},
];

    fetchUsers(){
        return this.fakeUsers;
    }

    createUser(userData: { name: string; email: string; password: string}){
        return this.fakeUsers.push(userData);
    }
}
