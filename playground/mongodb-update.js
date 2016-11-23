// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to MongoDB server');

    }
    console.log('connected to mongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //         _id: new ObjectID('58351e98ddb7625dfd1853ff')
    //     }, {
    //       $set: {
    //         completed: false
    //       }
    //     },{
    //       returnOriginal: false
    //     }).then((result) => {
    //       console.log(result);
    //     });
        db.collection('User').findOneAndUpdate({
                _id: new ObjectID('583514fba5fcc909d4ee7b43')
            }, {
              $set: {
                name: 'Nhan'
              },
              $inc:{
                age: 24
              }
            },{
              returnOriginal: false
            }).then((result) => {
              console.log(result);
            });
        // db.close();
});
