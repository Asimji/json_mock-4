const jsonServer=require("json-server");
const cors=require("cors");

const server=jsonServer.create();

const router=jsonServer.router("db.json");

server.use(cors());
server.use(router);

server.listen(8080,()=>{
    console.log("Server is running at 8080")
})