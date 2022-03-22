const Accounts = require('../models/Accounts')

module.exports = async( id ) => {
	try{
		await Accounts.deleteOne({ _id })
		return true;
	}catch (err) {
        return false
	}
}