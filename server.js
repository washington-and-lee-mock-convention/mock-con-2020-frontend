// This file should only be included in the beta branch for Heroku deployments
const express = require('express');

const path = require('path');   

const app = express();   

// Serve only the static files form the dist directory    
app.use(express.static(__dirname + '/dist/MockConvention2020'));

app.get('/*', function(req,res) {  
    res.sendFile(path.join(__dirname+'/dist/MockConvention2020/index.html'));   
});  

// Start the app by listening on the default Heroku port    
app.listen(process.env.PORT || 8080);