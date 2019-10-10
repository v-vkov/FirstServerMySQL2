const {checkValidity} = require ('../../validators');

module.exports = (req, res, next) => {

    try {
        const house = req.body;
        checkValidity.isHouseValid(house);

        next();

    } catch (e) {
        res.status(400).json(e.message);
    }
}