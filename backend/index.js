const express = require('express')
const CategoryRouter = require('./route/category.routes')
const ProductRouter = require('./route/product.routes')
const RazmersRouter = require('./route/razmers.routes')
const CustomerRouter = require('./route/customer.routes')
const SalespersonRouter = require('./route/salesperson.routes')
const ZakazRouter = require('./route/zakaz.routes')
const ZakazanoRouter = require('./route/zakazano.routes')

const PORT = process.env.PORT || 3002
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())

app.use('/api', CategoryRouter)
app.use('/api', ProductRouter)
app.use('/api', RazmersRouter)
app.use('/api', SalespersonRouter)
app.use('/api', CustomerRouter)
app.use('/api', ZakazRouter)
app.use('/api', ZakazanoRouter)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`)
})