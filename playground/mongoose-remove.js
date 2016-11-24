const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findOneAndRemove({_id: '5836bad3ddb7625dfd185404'}).then((todo) => {
//
// })
Todo.findByIdAndRemove('5836bad3ddb7625dfd185404').then((todo) => {
  console.log(todo);
});
