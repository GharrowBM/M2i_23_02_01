import express from "express"
import { CustomerService } from "./services/customerService.js"
import { ProductService } from "./services/productService.js"
import { OrderService } from "./services/orderService.js"
import productRouter from "./router/productRouter.js"


const app = express()

app.use(express.json())

//Création de services
export const customerService = new CustomerService()
export const productService = new ProductService()
export const orderService = new OrderService(customerService, productService)


// Endpoints

app.use('/produits',productRouter)


// creation client
app.post('/clients', (req, res) => {
    const { firstName, lastName, phone } = req.body
    customerService.addCustomer(firstName, lastName, phone)
    res.json({ message: "client ajouté" })
})

//recuperation clients
app.get('/clients', (req, res) => {
    res.json(customerService.getAllCustomers())
})

//recuperation client par id
app.get('/clients/:id', (req, res) => {
    const customer = customerService.getCustomerById(req.params.id)
    if (customer != undefined) {
        res.json(customer)
    } else {
        res.json({ message: "aucun client avec cet id" })
    }
})

// Recuperation de la liste des commandes
app.get('/commandes', (req, res) => {
    res.json(orderService.getAllOrders())
})

// Recuperation d'un commande par id
app.get('/commandes/:id', (req, res) => {
    const order = orderService.getOrderById(req.params.id)
    if (order != undefined) {
        res.json(order)
    } else {
        res.json({ message: "aucune commande avec cet id" })
    }
})


// Création d'une commande
app.post('/commandes', (req, res) => {
    const {customerId, products} = req.body
    if(orderService.addOrder(customerId,products)){
        res.json({ message: "commande ajouté" })
    }else {
        res.json({ message: "erreur" })
    }
})





app.listen(3000, () => {
    productService.readFromJson()
    customerService.readFromJson()
    orderService.readFromJson()
})