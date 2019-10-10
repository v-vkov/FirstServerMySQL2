const {pool} = require ('../../dataBase');

module.exports = async (req, res, next) => {
    
    try {
    const {houseId} = req.params; 
    const query = `SELECT * FROM house WHERE id = ${houseId}`;
    const [isHousePresent] = await pool.promise().query(query);

    if (!isHousePresent.length) {
        throw new Error (`House with ${houseId} ID is not found`);
    }

    req.house = isHousePresent;
    next(); 
    
    } catch (e) {
    res.status(400).json(e.message);
    }
}