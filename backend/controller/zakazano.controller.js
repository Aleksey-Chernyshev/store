const db = require('../datab')

class ZakazanoController{
    async createSpecTTN(req, res){
        const {id_zakaz, id_product, count, totalprice, sale} = req.body
        const newZakazano = await db.query(
            `INSERT INTO zakazano (id_zakaz, id_product, count, totalprice, sale) values ($1, $2, $3, $4, $5) RETURNING *`, [id_zakaz, id_product, count, totalprice, sale])
            res.json(newZakazano.rows[0])
    }
    async getSpecTTNs(req, res){
        const Zakazano = await db.query(`SELECT * FROM zakazano`)
        res.json(Zakazano.rows)
    }
    async updateSpecTTN(req, res){
        const{id, count, totalprice,sale } = req.body
        try {
            const zapis = await db.query('SELECT id FROM zakazano WHERE id = $1', [id]);
            if (zapis.rows.length === 0) {
              return res.status(404).send('Запись с таким id не найдена');
            }
        

            const Zakazano = await db.query(
              'UPDATE zakazano SET count = $1, totalprice = $2, sale = $3 WHERE id = $4 RETURNING *',
              [count, totalprice, sale, id]
            );
            res.json(Zakazano.rows[0]);
          } catch (error) {
            console.error('Ошибка при обновлении:', error);
            res.status(500).send('Внутренняя ошибка сервера');
          }
    }
    async deleteSpecTTN(req, res){
        const id = req.params.id
        const Zakazano = await db.query(`DELETE FROM zakazano where id = $1`, [id])
        res.json(Zakazano.rows[0])
    }
}
module.exports = new ZakazanoController()