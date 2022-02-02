
//currency

const getData = async(data)=>{
  try{
    const { data } = await axios.get('http://api.exchangeratesapi.io/v1/latest?access_key=a8482c395e320816755d6ef3d155c161&symbols=USD,AUD,CAD,PLN,MXN&format=1');
    //console.log(data.rates.USD)
    return data;
  } catch(e) {
    console.log(e);   
  }
}

// const getCurrency = ()=>{
//   const curr = await getData()
//   res.json(curr)
// }

//feet to inches
const getInches = (feet)=>{
  b = 12
  return Number(feet) + " feet is " + Number(feet) * Number(b) + " inches"
}

const getInchesController = (req, res)=>{
  getInches
  res.send(String(getInches(req.query.feet, req.query.b)));
}

//http://localhost:3000/conversion/inches?feet=9

//miles to km
const getKm = (miles)=>{
  b = 1.6
  return Number(miles) + " miles is " + Number(miles) * Number(b) + " kilometers"
}

const getKmController = (req, res)=>{
  getKm
  res.send(String(getKm(req.query.miles, req.query.b)));
}

// http://localhost:3000/conversion/km?miles=9

//cups to ounces 
const getOunces = (cups) => {
  b = 8
  return Number(cups) + " cups is " + Number(cups) * Number(b) + " ounces"
}

const getOuncesController = (req, res)=>{
  getOunces
  res.send(String(getOunces(req.query.cups, req.query.b)));
}

//http://localhost:3000/conversion/ounces?cups=9

//pounds to kg
const getKgs = (pounds) => {
  b = 2.2
  return Number(pounds) + " pounds is " + Number(pounds)/Number(b) + " kilograms"

}

const getKgsController = (req, res)=>{
  getKgs
  res.send(String(getKgs(req.query.pounds, req.query.b)));
}

//http://localhost:3000/conversion/kgs?pounds=9

//celsius to farenheit 
const getFahrenheit = (celsius) => {
  b = 1.8
  c = 32
  return Number(celsius) + " degrees celsius is " + Number(Number(celsius) * Number(b) + Number(c)) + " degrees fahrenheit"
}

const getFahrenheitController = (req, res)=>{
  getFahrenheit
  res.send(String(getFahrenheit(req.query.celsius, req.query.b)));
}

//http://localhost:3000/conversion/degrees?celsius=8


module.exports = {
  getInches,
  getInchesController,
  getKm,
  getKmController,
  getOunces,
  getOuncesController,
  getKgs,
  getKgsController,
  getFahrenheitController
}