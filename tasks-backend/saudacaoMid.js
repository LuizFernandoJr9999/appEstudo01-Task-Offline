function saudacao(nome) {
  //console.log('Seja bem vindo ' + nome + '.')
  return function (req, res, next) {
    console.log(`Seja bem vindo ${nome}.`)
    next()
  }
}
module.exports = saudacao