import express from 'express'
const app = express()
const port = 2504

app.set('port', port)
app.listen(app.get('port'), () => {
    console.log(`El Backend está funcionando en el puerto ${port}`)
})