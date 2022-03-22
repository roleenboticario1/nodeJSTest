const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AccountsSchema = new Schema({
   username : {
   	  type : String,
   	  required : true
   },
   password : {
   	  type  : String,
   	  required : true
   }
})

module.export = mongoose.model('Accounts', AccountsSchema)