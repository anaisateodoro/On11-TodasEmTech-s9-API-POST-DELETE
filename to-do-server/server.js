const app = require ("./src/app")
const PORT = 3030

app.listen(PORT, ()=>{
    console.log(` Olá o App está rodando na porta ${PORT}`)
})