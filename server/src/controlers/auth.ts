
import userDb from '../models/User';
import bycrypt from '../modules/bycrypt';
import { resolve } from 'dns';
interface Date {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
}
class Auth {
    register(data: Date) {
        return new Promise((resolve, reject) => {
            bycrypt.createHash(data.password).then((hashPassword: string) => {
                data.password = hashPassword;
                let user = new userDb(data);
                user.save((res: any, err: any) => {
                    resolve(res);
                });
            })
        })
    }
    login(data: Date) {
        return new Promise<boolean>((resolve, reject) => {
            userDb.findOne({email: data.email }, (user, err) => {
                resolve(user);
                // if (user) {
                //     bycrypt.checkPassword(data.password, user.password).then((status) => {
                //         resolve(status);
                //     })
                // }
                // else{
                //     resolve(false);
                // }
            })
        })
    }
}
export = new Auth();