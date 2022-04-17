const Sequlize = require('sequelize');
const config = require('config')

const instancia = new Sequelize(
    config.get('mysql.banco-de-dados'),
    config.get('mysql.root'),
    config.get('mysql.senha'),
    {
        host: config.get('mysql.host'),
        dialect: "mysql"
    }
);


module.exports = instancia;