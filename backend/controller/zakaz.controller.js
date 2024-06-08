const db = require('../datab')

class ZakazController{
    async createZakaz(req, res){
        const {customer, salesperson, registration_day} = req.body
        const newZakaz = await db.query(
            `INSERT INTO zakaz (customer, salesperson, registration_day) values ($1,$2, $3) RETURNING *`, [customer, salesperson, registration_day])
            res.json(newZakaz.rows[0])
    }
    async getZakazs(req, res){
        const Zakaz = await db.query(`SELECT zakaz.*, customer.name, salesperson.fio FROM zakaz
        JOIN  customer ON zakaz.customer = customer.id JOIN salesperson ON zakaz.salesperson = salesperson.id`)
        res.json(Zakaz.rows)
    }

    async deleteZakaz(req, res){
        const id = req.params.id
        const Zakaz = await db.query(`DELETE FROM zakaz where id = $1`, [id])
        res.json(Zakaz.rows[0])
    }
}
module.exports = new ZakazController()