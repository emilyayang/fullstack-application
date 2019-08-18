const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/orders', {useNewUrlParser: true})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected to mongo~~~'));

const orderSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true},
  dish: { type: String, required: true},
  resturant: { type: String, required: true}
});

var Orders = mongoose.model('Orders', orderSchema);

module.exports = Orders;