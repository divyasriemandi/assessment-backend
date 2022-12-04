const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

const { getFortune } = require('./controller')

app.get("/api/fortune", getFortune);


const {getHouses, deleteHouses, createHouses, updateHouses} = require('./controller');


app.get('/api/houses/:id', getHouses);
app.post('/api/houses/:id', createHouses);
app.delete('/api/houses/:id', deleteHouses);
app.put('/api/houses/:id', updateHouses);



app.listen(4000, () => console.log("Server running on 4000"));
