const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }],
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    address: {
        street: {
            type: String,
            required: true
        },
        nuber: {
            typre: String,
            required: true
        },
        city: {
            tpe: String,
            required: true
        }
    },
    payment: {
        card: {
            number: {
                type: String
            },
            cvc: {
                type: String
            }
        }
    }
})

module.exports = mongoose.model('Cart', Schema)