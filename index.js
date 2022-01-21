const axios = require('axios');

let data = []

const getData = async(data)=>{
  try{
    const { data } = await axios.get('http://api.exchangeratesapi.io/v1/latest?access_key=a8482c395e320816755d6ef3d155c161&symbols=USD,AUD,CAD,PLN,MXN&format=1');
    //console.log(data.rates.USD)
    return data;
  } catch(e) {
    console.log(e);   
  }
}

var amount = 100;

const ConvertCurrency = async(data) => {
  const curr = await getData()
  console.log(amount + "EUR = "+ curr.rates.USD*amount + "USD")
  console.log(amount + "EUR = " + curr.rates.AUD*amount + "AUD")
  console.log(amount + "EUR = " + curr.rates.CAD*amount + "CAD")
  console.log(amount + "EUR = " + curr.rates.PLN*amount + "PLN") 
  console.log(amount + "EUR = " + curr.rates.MXN*amount + "MXN")
  
}

ConvertCurrency();