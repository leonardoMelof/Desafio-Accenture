
const generateRandomString = (length) => {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

const generateRandomEmail = () => {
    return `${generateRandomString(7)}@teste.com`;
};

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min).toString();
};

module.exports = {
    generateUser: () => ({
        firstName: generateRandomString(6),
        lastName: generateRandomString(8),
        email: generateRandomEmail(),
        age: generateRandomNumber(18, 60),
        salary: generateRandomNumber(2000, 9000),
        department: "IT"
    })
};