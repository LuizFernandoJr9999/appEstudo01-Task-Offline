const express = require('express');
const app = express();
const db = require('./config/db');
const consign = require('consign');

consign()
  .include('./config/passport.js')
  .then('./config/middlewares.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app);

app.db = db;

app.listen(3000, () => {
  console.log('Backend executando...')

/*
const bodyParser = require('body-parser');

const usuarioApi = require('./api/usuario');

//require('./api/produto')(app, 'com param!');
const produtoApi = require('./api/produto')
produtoApi(app, 'com param!');

app.post('/usuario', usuarioApi.salvar);
app.get('/usuario', usuarioApi.obter);

const saudacao = require('./saudacaoMid');

app.use(bodyParser.urlencoded({extended: true})) 
app.use(bodyParser.text()) 
app.use(bodyParser.json()) 
app.use(saudacao('Guilherme'))

app.use((req, res, next) => {
  console.log('Antes...')
  next()
}) 

app.get('/clientes/relatorio', (req, res) => {
  res.send(
    `Cliente relatório: completo= ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
  //let corpo = '';
  //req.on('data', function (parte){
  //  corpo += parte;
  //})
  //req.on('end', function () {
  //  res.send(corpo);
  //})
  //res.send(req.body.nome);
  res.send(JSON.stringify(req.body));
})

//app.get('/clientes/relatorio', (req, res) => {
//  res.send(
//    `Cliente relatório: completo= ${req.query.completo} ano = ${req.query.ano}`)
//})

app.get('/clientes/:id', (req, res) => {
  res.send(`cliente ${req.params.id} selecionado!`)
})

app.get('/opa', (req, res, next) => {
  console.log('Durante...')
  res.json({
    data: [
      {id: 7, name: 'Ana', position: 1},
      {id: 34, name: 'Bia', position: 2},
      {id: 73, name: 'Carlos', position: 3}
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200
  })
  next()
})

app.use('/opa', (req, res)=> {
  console.log('Depois...')
  }) 

//  res.json({
//    name: 'iPad 32Gb',
//    price: 1899.00,
//    discount: 0.12
//  })
// res.send('<h1>Estou bem!</h1><br><br><h2>Tipo é HTML!</h2>')
//const db = require('./config/db')
//const consign = require('consign')
//app.get('/',(req, res) => {
//  res.status(200).send('Meu Backend 1!')
//})
/*
consign()
  .include('./config/passport.js')
  .then('./config/middlewares.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app)

app.db = db
app.listen(3000, () => {
  console.log('Backend executando...')
*/
})