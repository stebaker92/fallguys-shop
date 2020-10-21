var express = require('express')
var app = express()
var router = express.Router()
const fallguys = require('fallguys-api');

app.get('/skins', async function (req, res, next) {
    const skins = await fallguys.getFreeSkins();
    console.log(skins)
    res.send(skins)
})

app.get('/daily', async function (req, res, next) {
    const skins = await fallguys.getDaily();
    console.log(skins)
    res.send(skins)
})
app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
})