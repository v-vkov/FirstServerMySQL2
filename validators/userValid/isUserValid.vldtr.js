module.exports = userObj => {

    const {name, login, password} = userObj;

    if (!name || !login || !password) {
        throw new Error ('ENTER ALL FIELDS FIRST, PLEASE!');
    }
}