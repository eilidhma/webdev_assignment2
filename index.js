const express = require('express');
const app = express();
app.use(express.json())
const conversionRouter = require('./routes/conversion');
const router = express.Router();

app.use(conversionRouter);

app.listen(3000, ()=>console.log('server running'))

const getData = async()=>{
  try{
    const { data } = router.get()
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