const {pool} = require ('../../dataBase');

module.exports = async (req, res, next) => {
    
    try {
    const {userId} = req.params; 
    const query = `SELECT * FROM user WHERE id = ${userId}`;
    const [isUserPresent] = await pool.promise().query(query);

    if (!isUserPresent.length) {
        throw new Error (`User with ${userId} ID is not found`);
    }

    req.user = isUserPresent;
    next(); 
    
    } catch (e) {
    res.status(400).json(e.message);
    }
}