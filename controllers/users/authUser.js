const {pool} = require ('../../dataBase');

module.exports = async (req, res) => {
    
    const user = req.body;
    const query = `SELECT * FROM user WHERE login = "${user.login}" AND password = "${user.password}"`;
    
    await pool.promise().query(query);

    res.json(user);

}