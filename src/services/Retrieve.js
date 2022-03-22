const Accounts = require('../models/Accounts')

module.exports = async ( _id ) => {
  try {
    const results = await Accounts.find({ _id })
    return results
  } catch (err) {
    return []
  }
}