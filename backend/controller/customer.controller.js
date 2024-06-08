const db = require('../datab')

class CustomerController{
    async createCustomer(req, res){
        const {name, email,phone, registration_date} = req.body
        const newCustomer = await db.query(`INSERT INTO customer (name, email,phone, registration_date) 
        values ($1, $2, $3, $4) RETURNING *`, [name, email,phone, registration_date])
        res.json(newCustomer.rows[0])
    }
    async getCustomers(req, res){
        const customers = await db.query(`SELECT * FROM customer`)
        res.json(customers.rows)
    }

    async updateCustomer(req, res){
        const{id, phone} = req.body
        const customer = await db.query(
            'UPDATE customer set phone = $1 where id = $2 RETURNING *', [phone, id]
        )
        res.json(customer.rows[0])
    }
    async deleteCustomer(req, res){
        const id = req.params.id
        const customer = await db.query(`DELETE FROM customer where id = $1`, [id])
        res.json(customer.rows[0])
    }
}
module.exports = new CustomerController()