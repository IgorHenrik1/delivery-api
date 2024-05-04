const { hash, compare } = require('bcryptjs');
const AppError = require('../utils/AppError');

const sqliteConnection = require('../database/sqlite');

class OrderController {
    async create(req, res) {
        const { products, description, price, rate, payments } = req.body;
        const user_id = req.user.id;

        const database = await sqliteConnection();

        const user = await database.get('SELECT * FROM users WHERE id = (?)', [
            user_id,
        ]);

        const address = user.address;

        const value = parseInt(price) + parseInt(rate);

        await database.run(
            'INSERT INTO orders(user_id, products, description, price, rate, value, payments, address ) VALUES (?, ?, ?, ?,?, ?, ?, ?)',
            [
                user_id,
                products,
                description,
                price,
                rate,
                value,
                payments,
                address,
            ],
        );
        return res.status(201).json();
    }
}

module.exports = OrderController;
