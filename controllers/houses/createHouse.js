const {pool} = require ('../../dataBase');

module.exports = async (req, res) => {

    const {city, rooms, price} = req.body;
    const query = (`INSERT INTO house (city, rooms, price) VALUES (?, ?, ?)`);

    await pool.promise().query(query, [city, rooms, price]);
    
    res.end('OK');
    
}