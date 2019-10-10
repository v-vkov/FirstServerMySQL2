const {pool} = require ('../../dataBase');

module.exports = async (req, res) => {
    const {name, login, password} = req.body;
    const query = (`INSERT INTO user (name, login, password) VALUES (?, ?, ?)`);

    await pool.promise().query(query, [name, login, password]);
    res.render('login'); 
}