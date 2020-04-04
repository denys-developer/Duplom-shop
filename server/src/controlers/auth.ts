//
// import userDb from '../models/User';
// import bycrypt from '../modules/bycrypt';
// import { resolve } from 'dns';
// interface UserDate {
//     email: string;
//     password: string;
//     firstName?: string;
//     lastName?: string;
// }
// class Auth {
//     register(data: UserDate) {
//         return new Promise((resolve, reject) => {
//             bycrypt.createHash(data.password).then((hashPassword: string) => {
//                 data.password = hashPassword;
//                 let user = new userDb(data);
//                 user.save((res: any, err: any) => {
//                     resolve(res);
//                 });
//             })
//         })
//     }
//     login(data: UserDate) {
//         return new Promise<boolean>((resolve, reject) => {
//             try {
//                 userDb.findOne({ email: data.email }, (err, user: UserDate) => {
//                     if (user) {
//                         bycrypt.checkPassword(data.password, user).then((status: any) => {
//                             resolve(status);
//                         })
//                     }
//                     else {
//                         resolve(false);
//                     }
//                 })
//             }
//             catch (err) {
//                 resolve(err);
//             }
//         })
//     }
// }
// export = new Auth();
