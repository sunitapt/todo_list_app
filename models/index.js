var mongoose = require('mongoose');
mongoose.set('debug',true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://sunita:sunita@cluster0-shard-00-00.hybao.mongodb.net:27017,cluster0-shard-00-01.hybao.mongodb.net:27017,cluster0-shard-00-02.hybao.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-3hmsyi-shard-0&authSource=admin&retryWrites=true&w=majority',async function(err){
    if(err) throw err;
})
.then(() => {
    return app.start();
})
.catch(err => { // mongoose connection error will be handled here
    console.error('App starting error:', err.stack);
    process.exit(1);
});


mongoose.Promise = Promise;
module.exports.Todo = require("./todo");