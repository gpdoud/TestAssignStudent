import { User } from "./user.class";

export class SelectedUser {
    user: User;
    selected: Boolean;

    constructor(user: User) {
        this.user = user;
        this.selected = false;
    }
}