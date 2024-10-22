const config=require('../Config/localhost')
Object.keys(config).forEach(key=>{
    process.env[key]=config[key]
})
let port=process.env.port || 4002
let http=require('http')
let app=require('../app')
let server=http.createServer(app)
server.listen(port,()=>{
    console.log('http://localhost:4002')
})
app.set('port',port)
