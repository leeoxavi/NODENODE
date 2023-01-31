/* npm i init

"start": "nodemon ./index.js localhost 3000"

npm i nodemon

npm i express

npm i express-handlebars

npm i mysql */



const express = require('express')
const {engine} = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.use(
    express.urlencoded({
        extended:true,
    })
)

app.use(express.json())

app.engine('handlebars', engine())
app.set('view engine', 'handlebars');

app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.render('home')
})

app.post('/estudantes/insertestudantes', (req, res) =>{
    const name = req.body.name
    const serie = req.body.serie

    const sql = `INSERT INTO estudantes (nome, serie) VALUES ('${name}', '${serie}')`

    conn.query(sql, function(err){
        if(err){
            console.log(err)
        }
        res.redirect('/')
    })
})


const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'senac'

})

conn.connect(function(err){
    if(err){
        console.log(err)
    }
    console.log('conectou com DB')

    app.listen(3000)
})