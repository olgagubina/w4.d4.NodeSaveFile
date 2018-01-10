var fs = require('fs');
var express = require('express');
var app = express()
var port  = 3000;

// var data = { name : "Hadas", job : "queen" };

app.use(express.static('public'));
app.use(express.static('node_modules'));

// fs.writeFile('test.txt', JSON.stringify(data), function(err) {
//     if(err) {
//         throw err;
//     }
//     console.log("The file was saved!");
// }); 


app.get('/file', function(req, res){
    fs.readFile('test.txt', 'utf-8', function(err, data) {
        if (err) throw err;
        res.send(data);
    })
})

app.listen(port, function() {
    console.log('Port '+port+' is listening you!');
});



