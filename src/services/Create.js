const Accounts = require('../models/Accounts')

module.exports = async( username, password ) => {
	try{
		await Accounts.insertMany({
			username,
			password
		})
		return true;
	}catch (err) {
		console.log("err :" ,err)
        return false
	}
}