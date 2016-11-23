// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
// var user = {name : 'Nhan', age : 25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to MongoDB server');

  }
  console.log('connected to mongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  //
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //
  // });
  db.collection('User').insertOne({

    name: 'Nhan',
    age: 25,
    location: 'Vung Tau'
  }, (err, result) => {
    if(err) {
        return console.log('unable to insert user', err);
    }

    console.log(result.ops[0]._id.getTimestamp());

  });
  db.close();
});
