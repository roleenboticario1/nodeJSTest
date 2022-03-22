const Accounts = require('../models/TodoLists')

module.exports = async ( _id ) => {
  try {
    const results = await Accounts.find({ _id })
    return results
  } catch (err) {
  	console.log(err)
    return []
  }
}