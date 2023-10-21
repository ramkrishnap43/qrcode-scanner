const express = require("express");

const app = express();
const cors = require("cors");
const qrRouter = require("./qrCodeRouter");

app.use(express.json());
app.use(cors());
app.use('/api', qrRouter)

const port = 8080;

app.listen(port , () => {
    console.log(`server running on ${port}`)
})
