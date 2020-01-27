let router = require('express').Router();
router.post('/login', (req: any, res: any) => {
    console.log(req.body);
    res.send(req.body);
})
module.exports = router;