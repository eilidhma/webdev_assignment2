
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
const getInches = (a)=>{
  b = 12
  return Number(a) * Number(b)
}

const getInchesController = (req, res)=>{
  getInches
  res.send(String(getInches(req.query.a, req.query.b)));
}


const getTodoById = (req,res)=>{

}


//miles to km
const getKm = (miles)=>{
  return miles * 1.6
}

//cups to ounces 
const getOunces = (cups) => {
  return cups * 8
}

//pounds to kg
const getKgs = (pounds) => {
  return pounds/2.2
}

module.exports = {
  getInches,
  getInchesController,
  getKm,
  getOunces,
  getKgs
}