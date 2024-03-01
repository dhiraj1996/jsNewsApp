const express = require('express')
const path = require('path')
const app = express()
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static('./public'));
// app.get('/', function (req, res) {
//   res.sendFile('index.html', {root: path.join(__dirname) } )
// })

app.get('/', (req, res)=>{
    res.render('index');
})


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
});