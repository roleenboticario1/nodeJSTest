const Accounts = require('../models/Accounts')

module.exports = async( id, obj ) => {
	try{
		await Accounts.updat({ _id }, { $set: obj })
		
		return true
	}catch (err) {
        return false
	}
}