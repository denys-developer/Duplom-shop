let router = require('express').Router();
let auth = require('../controlers/auth');
router.post('/login', (req: any, res: any) => {
    auth.login(req.body).then((status: boolean) => {
        res.send(status);
    })
});
router.post('/register', (req: any, res: any) => {
    auth.register(req.body).then((response: any) => {
        res.send(response);
    });
});
module.exports = router;