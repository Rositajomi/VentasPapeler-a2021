const express = require('express')
const app = require("./app");
const http = require("http");

const normalizePort = (val) => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
};

const port = normalizePort(process.env.PORT || "3002");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);

class Server{
    constructor(){
        this.app = express()
        this.port= 8080 process.env.PORT
        this.usuariosPath='api/usaurios'

        //middlewares()
        this.app.use(express.json())
        const jwt = require("jsonwebtoken");
        const User = require("../models/user");

        module.exports = (req, res, next) => {
            const token = req.headers.authorization.split(" ")[1];
            const decodedToken = jwt.decode(token);
            req.userData = { email: decodedToken.email, name: decodedToken.name };
            console.log(decodedToken);
            next();
        };  

        //rutas de la APP
        this.routes()
     
    }
    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }
}

module.exports = Server

