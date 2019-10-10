const {pool} = require ('../../dataBase');

module.exports = async (req,res) => {
    
    const [houses] = await pool.promise().query('SELECT * FROM house');
    res.json(houses);
}
