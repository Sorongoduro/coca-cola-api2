const express = require('express')
const Product = require('../models/products')
const Users = require('../models/users')
const router = express.Router()
// const getClient = require('../db/mongodb')


// router.get('/productos', (req, res) => {
//     getClient((db) => {
//         db.collection('productos').find().toArray((err, result) => {
//             if (err) return res.send('Error al cargar productos')
//             return res.send(result)
//         })
//     })
// })

// router.get('/comprar/:id', (req, res) => {
//     const id = req.params
//     getClient((db) => {
//         db.collection('productos').findOne({
//             _id: new ObjectId(id)
//         }, (err, result) => {
//             if (err) return res.send('Error al cargar productos')
//             return res.send(result)
//         })
//     })
// })



router.get('/productos', (req, res) => {
    Product.find()
        .then((products) => {
            res.send(products)
        })
        .catch((err) => {
            res.send(err)
        })
})

router.get('/comprar/:id', (req, res) => {
    const _id = req.params.id
    Product.findById(_id)
        .then((product) => {
            res.send(product)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
})

router.post('/producto', (req, res) => {
    const product = new Product(req.body)
    product.save()
        .then(() => {
            res.send(product)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
})

router.patch('/producto/:id', (req, res) => {
    const _id = req.params.id
    Product.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
        .then(product => {
            res.send(product)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
})

router.delete('/producto/:id', (req, res) => {
    const _id = req.params.id
    Product.findByIdAndDelete(_id)
        .then(product => {
            res.send(product)
        })
        .catch(err => {
            res.status(500).send(err)
        })
})

router.get('/usuarios', (req, res) => {
    Users.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.send(err)
        })
})

router.post('/usuario', (req, res) => {
    const usuario = new Users(req.body)
    usuario.save()
        .then(() => {
            res.send(usuario)
        })
        .catch(err => {
            res.status(500).send(err)
        })
})

router.patch('/usuario/:id', (req, res) => {
    const _id = req.params.id
    Users.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
        .then(user => {
            res.send(user)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
})

router.delete('/usuario/:id', (req, res) => {
    const _id = req.params.id
    console.log(_id)
    Users.findByIdAndDelete(_id)
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send(err)
        })
})

// router.delete('/producto/:id', (req, res) => {
//     const id = req.params
//     getClient((db) => {
//         db.collection('productos').deleteOne({
//             _id: new ObjectId(id)
//         }, (err, result) => {
//             if (err) return res.send('Error al borrar el producto')
//             return res.send(result)
//         })
//     })
// })

module.exports = router