const houses = require('./db.json');
let globalHouseId = 4

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
        
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },


    getFortune: (req, res) => {
        const fortunes = ["When love is...inspiring someone to follow their dreams.", "Do what you love. The rest will fall into place.", "Follow what you love and see what turns up.", "Follow what calls you.","You should def go for it."];
    
  
    // choose random fortune
      let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomfortune = fortunes[randomIndex];
  
     res.status(200).send(randomfortune);
    },


  

    getHouses: (req, res) => {res.status(200).send(houses);},
    deleteHouses: (req, res) => {const {id} = req.params.id;
        const houseIndex = houses.findIndex(house => house.id === id);
        houses.splice(houseIndex, 1);
        res.status(200).send(houses);
        },
    createHouses: (req, res) => {const {address, price, imageURL} = req.body;
        let newHouse = {
            id: globalHouseId,
            address,
           // price: +price,
            imageURL
        };
        houses.push(newHouse);
        globalHouseId++
        res.status(200).send(houses);

    },
    updateHouses: (req, res) => {
        const {id} = req.params;
        const {type} = req.body;
    const house = houses.find(house => house.id === +id);
    console.log(house);
    }

    
 }



 




