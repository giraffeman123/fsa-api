const express = require("express");
const flightRouter = require("./routes/flightRouter");
const answerRouter = require("./routes/answerRouter");
const dotenv = require('dotenv');
// Se configura el módulo dotenv para la lectura de variables del archivo .env
dotenv.config();


const app = express();
const PORT = process.env.PORT || 8880;

app.use(express.json());
app.use(`/flights`, flightRouter);
app.use(`/answers`, answerRouter);
app.use(`/liveness`, (req, res, next) => {
	res.status(200).json('fsa API is alive');
});


app.use((req, res, next) => {
    res.status(404).json(
        {
	  "timestamp":  new Date().toUTCString(),
	  "code": 404,
	  "title": "Bad request",
	  "detail": "Page not found"
	}
    )
})
 

const server = app.listen(PORT, () => {
	//console.log(`Server listening on port ${PORT}`);
});
  
module.exports = server;
  