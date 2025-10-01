import { UserModel } from "../models/user";

export class UserService {
    static getUsers(): UserModel[] {
        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify([
                {
                    firstName: 'Example',
                    lastName: 'user',
                    email: 'user@example.com',
                    phoneNumber: '+38163123123',
                    password: 'user123',
                    destination: 'Zagreb',
                    data: []
                }
            ]));
        }

        return JSON.parse(localStorage.getItem('users')!);
    }
    
    static findUserByEmail(email: string) {
        const users = this.getUsers();

        const user = users.find(u => u.email === email);
        if (!user) throw new Error('USER_NOT_FOUND');
        return user;
    }

    static login(email: string, password: string) {
        const user = this.findUserByEmail(email);

        if (user.password !== password) {
            throw new Error('BAD_CREDENTIALS')
        }

        localStorage.setItem('active', user.email);
        return true;
    }

    static logout() {
        localStorage.removeItem('active');
    }

    static signup(model: UserModel) {
        const users = this.getUsers();
        users.push(model);
    }

    static getActiveUser() {
        const active = localStorage.getItem('active')
        if (!active) throw new Error('NO_ACTIVE_USER');

        return this.findUserByEmail(active);
    }
}