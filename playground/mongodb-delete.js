// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to MongoDB server');

  }
  console.log('connected to mongoDB server');

//del many
// db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
//   console.log(result);
// });
//del1
// db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
//   console.log(result);
// });
//find and del
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });
// db.collection('User').deleteMany({name: 'Nhan'});
db.collection('User').findOneAndDelete({
  _id: new ObjectID("58351746c550010a17b71af4")
}).then((result) => {
  console.log(JSON.stringify(result, undefined, 2));
});
  // db.close();
});
