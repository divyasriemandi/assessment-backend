const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment);

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)
const btn = document.querySelector('#btn');
const sb = document.querySelector('#list')
dropDownValue = '1';
btn.onclick = (event) => {
            event.preventDefault();
            dropDownValue = sb.value;
            console.log(dropDownValue);
            getAllHouses()

        };
const btnAdd = document.querySelector('#btnAdd');
const btnRemove = document.querySelector('#btnRemove');
const listbox = document.querySelector('#list');
const framework = document.querySelector('#framework');

btnAdd.onclick = (e) => {
  e.preventDefault();

  // validate the option
  if (framework.value == '') {
    alert('Please enter the name.');
    return;
  }
  // create a new option
  const option = new Option(framework.value, framework.value);
  // add it to the list
  listbox.add(option, undefined);

  // reset the value of the input
  framework.value = '';
  framework.focus();
};

// remove selected option
btnRemove.onclick = (e) => {
  e.preventDefault();

  // save the selected options
  let selected = [];

  for (let i = 0; i < listbox.options.length; i++) {
    selected[i] = listbox.options[i].selected;
  }

  // remove all selected option
  let index = listbox.options.length;
  while (index--) {
    if (selected[index]) {
      listbox.remove(index);
    }
  }
};


const housesContainer = document.querySelector('#houses-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/houses`

const housesCallback = ({ data: houses }) => displayHouses(houses,dropDownValue)
const errCallback = err => console.log(err)

const getAllHouses = id => axios.get(`${baseURL}/${id}`).then(housesCallback).catch(errCallback)
const createHouse = (id,body) => axios.post(`${baseURL}/${id}`, body).then(housesCallback).catch(errCallback)
const deleteHouse = id => axios.delete(`${baseURL}/${id}`).then(housesCallback).catch(errCallback)
const updateHouse = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(housesCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let address = document.querySelector('#newActivity')
   // let price = document.querySelector('#price')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        address: address.value,
      //  price: price.value, 
        imageURL: imageURL.value
    }

    createHouse(bodyObj)

    address.value = ''
   // price.value = ''
    imageURL.value = ''
    getAllHouses()
}

function createHouseCard(house) {
    const houseCard = document.createElement('div')
    houseCard.classList.add('house-card')

    houseCard.innerHTML = `<br><img alt='house cover image' src=${house.imageURL} class="house-cover-image" height="350" width="350"/>
    <p class="address">${house.address}</p>
   
    <button onclick="deleteHouse(${house.id})">delete</button>
    <br>
    `


    housesContainer.appendChild(houseCard)
}

function displayHouses(arr,value) {
    housesContainer.innerHTML = ``
  
        createHouseCard(arr[value-1])
    
}

form.addEventListener('submit', submitHandler)

