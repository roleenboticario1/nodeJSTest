const Accounts = require('../models/TodoLists')

module.exports = async (title, description) => {
  try {
    await Accounts.insertMany({
      title,
      description
    })

    return true
  } catch (err) {
  	console.log(err)
    return false
  }
}