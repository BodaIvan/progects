const fs=require('fs')
var moment = require('moment');
exports.index = function (req, res) {
   var fileName = moment().format('YYYY-MM-DD')
    try {
         if (fs.existsSync("./data/" + fileName + '.json')) {
        data = fs.readFileSync("./data/" + fileName + '.json', 'utf-8')
        data = JSON.parse(data)
        }
        } catch(err) {
             console.error(err)
        }
    res.render('index', { data: data } )
}
exports.new = function (req, res) {
    res.render('new')
}
exports.calendar = function (req, res) {
    res.render('calendar')
}
exports.save = function (req, res) {
    var fileName = moment().format('YYYY-MM-DD')
    var productInfo = [{ name: req.body.name, price: req.body.price }]
    console.log(productInfo);
    if (fs.existsSync("./data/" + fileName + '.json')) {
        var data = fs.readFileSync("./data/" + fileName + '.json', 'utf-8')
        data = JSON.parse(data)
        data.push(productInfo[0])
        fs.writeFile("./data/" + fileName + '.json', JSON.stringify(data), function (error) {
            if (error) throw error; 
            console.log("Асинхронний запис файлу завершений.");      
        });
        data = fs.readFileSync("./data/" + fileName + '.json', 'utf-8')
        data = JSON.parse(data)
    }
    else {
        fs.writeFile("./data/" + fileName  + '.json', JSON.stringify(productInfo), function (error) {
            if (error) throw error; 
            console.log("Асинхронний запис файлу завершений.");
        });
        data = fs.readFileSync("./data/" + fileName + '.json', 'utf-8')
        data = JSON.parse(data)
    }
    //var name = req.body.name ? req.body.name:"name"
   // var price= req.body.price ? req.body.price:"price"
    res.render('thanks', {name: req.body.name, price: req.body.price, data: data})
}