const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
 
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`CONNECTED TO MONGO!`);
    })
    .catch((err) => {
        console.log(`OH NO! MONGO CONNECTION ERROR!`);
        console.log(err);
    })
    //creating fruit schema
    const fruitSchema = new mongoose.Schema({
      name : String,
      rating : Number,
      review : String
    });
    //creating model
    const Fruit = mongoose.model("Fruit", fruitSchema);
    //creating documents (data)
    const fruit = new Fruit({
      name : "Apple",
      rating : 7,
      review : "Pretty solid as a fruit."
    });
    //storing data
   // fruit.save();
    //Creating Person schema
   const personSchema = new mongoose.Schema({
    name: String,
    age : Number
   });
   //creating person model
    const Person = mongoose.model("Person",personSchema);
   //insert data
   const person = new Person({
    name: "John",
    age : 37
   });
   //person.save();
