const bcrypt = require('bcrypt');
const saltRounds = 10;
interface UserDate {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
}
class HashPassword {
    createHash(password: string) {
        return new Promise<string>((resolve, reject) => {
            bcrypt.genSalt(saltRounds, function (err: any, salt: number) {
                bcrypt.hash(password, salt, function (err: any, hash: string) {
                    resolve(hash);
                });
            });
        })
    }
    checkPassword(password: string, user: UserDate) {
        return new Promise<boolean>((resolve, reject) => {
            bcrypt.compare(password, user.password, function (err: any, res: any) {
                if (res)
                    resolve(true);
                else
                    resolve(false);
            });
        });
    }
}
export = new HashPassword();