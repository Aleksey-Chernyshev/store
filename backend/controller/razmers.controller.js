const db = require('../datab')

class RazmerController{
    async getRazmers(req, res){
        const ed= await db.query(`SELECT * FROM razmers`)
        res.json(ed.rows)
    }

}
module.exports = new RazmerController()