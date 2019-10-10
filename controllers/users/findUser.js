const {pool} = require ('../../dataBase');

module.exports = async (req,res) => {
    
    const [users] = await pool.promise().query('SELECT * FROM user');
    res.json(users);
}