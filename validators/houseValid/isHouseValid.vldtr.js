module.exports = houseObj => {

    const {city, rooms, price} = houseObj;

    if (!city || !rooms || !price) {
        throw new Error ('ENTER ALL FIELDS FIRST, PLEASE!');
    }
}