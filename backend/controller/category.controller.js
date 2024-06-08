const db = require('../datab')

class CategoryController{
    async createCategory(req, res){
        const {type, description, image} = req.body
        const newCategory = await db.query(`INSERT INTO category (type, description, image) values ($1, $2, $3) RETURNING *`, [type, description, image])
        res.json(newCategory.rows[0])
    }
    async getCategories(req, res){
        const types = await db.query(`SELECT * FROM category`)
        res.json(types.rows)
    }

    async updateCategory(req, res){
        const{id,description} = req.body
        const type = await db.query(
            'UPDATE category set description = $1 where id = $2 RETURNING *', [description,id]
        )
        res.json(type.rows[0])
    }
    async deleteCategory(req, res){
        const id = req.params.id
        const type = await db.query(`DELETE FROM category where id = $1`, [id])
        res.json(type.rows[0])
    }
}
module.exports = new CategoryController()