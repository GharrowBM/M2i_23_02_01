import express from 'express'



const firstrouter = express.Router()

// middleware personalisé
function myCustomMiddleware(req,res,next) {
    console.log("Middleware de first router utilisé")
    next();
}

firstrouter.use(myCustomMiddleware)

firstrouter.get('/', (req,res) => {
    res.json({message : "racine de mon first router"})
})

firstrouter.get('/contact', (req,res) => {
    res.json({message : "contact de mon first router"})
})

firstrouter.get('/about', (req,res) => {
    res.json({message : "about de mon first router"})
})

firstrouter.get('/form', (req,res) => {
    res.json({message : "form de mon first router"})
})

export default firstrouter;