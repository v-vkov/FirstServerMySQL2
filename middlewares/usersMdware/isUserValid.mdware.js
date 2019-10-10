const {checkValidity} = require ('../../validators');

module.exports = (req, res, next) => {

    try {
        const user = req.body;
        checkValidity.isUserValid(user);

        next();

    } catch (e) {
        res.status(400).json(e.message);
    }
}