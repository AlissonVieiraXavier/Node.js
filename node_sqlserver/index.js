var Connection = require('tedious').Connection;  
var config = {  
    server: 'sqlserver.pergamarc.windows.net',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'sa', //update me
            password: 'Avx0231'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'pergamarc'  //update me
    }
};  
var connection = new Connection(config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.
    console.log("Connected");  
});

connection.connect();