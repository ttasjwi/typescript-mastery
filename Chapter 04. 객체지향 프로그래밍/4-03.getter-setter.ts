{
    class User {
        public constructor(private _firstName: string, private _lastName: string) {
            this._firstName = _firstName;
            this._lastName = _lastName;
        }

        public get firstName(): string {
            return this._firstName;
        }

        public get lastName(): string {
            return this._lastName;
        }

        public changeFirstName(firstName: string) : void {
            this._firstName = firstName;
        }

        public changeLastName(lastName: string) : void {
            this._lastName = lastName;
        }

        public get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
    }

    const user: User = new User("땃쥐", "강");
    console.log(user.firstName);
    console.log(user.lastName);
    console.log(user.fullName);
    user.changeFirstName("따땃쥐");
    user.changeLastName("깡");
    console.log(user.fullName);
}
