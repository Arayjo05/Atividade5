const fetch = require('node-fetch')

function converter (req, res){
    let url = 'https://economia.awesomeapi.com.br/json/USD-BRL'
    fetch(url)
    
    .then( (dado) => {
        
        return dado.json() 
    })
    .then( (rows) => {
        res.json(rows)
    })
}

module.exports = {converter}