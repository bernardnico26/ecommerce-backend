
const Category = require('./Category');
const Image = require('./Image');
const Products = require('./Products');
const User = require('./User');
const Cart = require('./Cart')
const Purchase = require('./Purchase');


Category.hasMany(Products);
Products.belongsTo(Category);

Products.hasMany(Image);
Image.belongsTo(Products);

User.hasMany(Cart)
Cart.belongsTo(User)

Products.hasMany(Cart)
Cart.belongsTo(Products)

Products.hasMany(Purchase);
Purchase.belongsTo(Products);

User.hasMany(Purchase);
Purchase.belongsTo(User);