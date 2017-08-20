// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('oh shit it failed nigga', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  //insert new doc into the users collection (name, age, location)

  // db.collection('Users').insertOne({
  //   name: 'ziad arafat',
  //   age: 19,
  //   location: 'Alamogordo NM'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('SHIT NIGGA IT DON DO NUFFIN');
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // })


  db.close();
});
