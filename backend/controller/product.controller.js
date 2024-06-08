const db = require('../datab')

class ProductController{
    async createProduct(req, res){
        const {name, category, razmer, price} = req.body
        const newProduct = await db.query(
            `INSERT INTO product (name, category, razmer, price) values ($1,$2, $3, $4) RETURNING *`, [name, category, razmer, price])
            res.json(newProduct.rows[0])
    }
    async getProductsId(req, res){
        const id = req.query.id
        let query = `SELECT * FROM product`
        if(id) {
            query += ` WHERE category = $1`
            const product = await db.query(``,[id])
            res.json(product.rows)
        } else{
            const product = await db.query(`SELECT product.*, category.type , razmers.razmer FROM product
            JOIN category ON product.category = category.id JOIN razmers ON product.razmer = razmers.id`)
            res.json(product.rows)
        }        
    } 

    async updateProduct(req, res){
        const{id,price} = req.body
        const product = await db.query(
            'UPDATE product set price = $1 where id = $2 RETURNING *', [price, id]
        )
        res.json(product.rows[0])
    }
    async deleteProduct(req, res){
        const id = req.params.id
        const product = await db.query(`DELETE FROM product where id = $1`, [id])
        res.json(product.rows[0])
    }
}
module.exports = new ProductController()