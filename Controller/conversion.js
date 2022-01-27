let rate = []

const createTodo = (req,res)=>{
  const newTodo = {...req.body, id: id++}
  Todos.push(newTodo)
  res.status(201).json(newTodo)
}

//currency
const getCurrency = (req,res)=>{
  res.json(rate)
}

//feet to inches
const getInches = (feet)=>{
  return feet * 12
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
  getCurrency,
  getInches,
  getKm,
  getOunces,
  getKgs
}