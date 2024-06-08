const db = require('../datab')

class SalespersonController{
    async createSalesperson(req, res){
        const {fio, phone, email, hire_date, birthday, pasport, photo } = req.body
        const newSalesperson = await db.query(`INSERT INTO salesperson (fio, phone, email, hire_date, birthday, pasport, photo) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [fio, phone, email, hire_date, birthday, pasport, photo])
        res.json(newSalesperson.rows[0])
    }
    async getSalespersons(req, res){
        const Salespersons = await db.query(`SELECT * FROM salesperson`)
        res.json(Salespersons.rows)
    }
    async updateSalesperson(req, res){
        const{id, phone, email} = req.body
        const Salesperson = await db.query(
            'UPDATE salesperson set phone = $1, email = $2 where id = $3 RETURNING *', [phone, email, id]
        )
        res.json(Salesperson.rows[0])
    }
    async deleteSalesperson(req, res){
        const id = req.params.id
        const Salesperson = await db.query(`DELETE FROM salesperson where id = $1`, [id])
        res.json(Salesperson.rows[0])
    }
}
module.exports = new SalespersonController()