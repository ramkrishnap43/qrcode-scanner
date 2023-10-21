const express = require("express");

const app = express();
const cors = require("cors");

const port = 8080;

app.listen(port , () => {
    console.log(`server running on ${port}`)
})
