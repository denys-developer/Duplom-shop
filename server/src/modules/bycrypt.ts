const bcrypt = require('bcrypt');
const saltRounds = 10;
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
    checkPassword(password: string, hash: string) {
        return new Promise<boolean>((resolve, reject) => {
            bcrypt.compare(password, hash, function (err: any, res: any) {
                if (res)
                    resolve(true);
                else
                    resolve(false);
            });
        });
    }
}
export = new HashPassword();