const express = require('express')
const router = express.Router()

const CreateServices = require('../services/Create');
const RetrieveServices = require('../services/Retrieve');
const UpdateServices = require('../services/Update');
const DeleteServices = require('../services/Delete');

router.post('/create', async (req, res) => {

   const { username, password } = req.body

   const results = await CreateServices(username, password)

   if(results){

	   	res
	   	  .status(200)
	   	  .send({
	   	  	 status : results,
	   	  	 message : 'Data Successfully Created'
	   	  })

   }else{
      res
   	  .status(500)
   	  .send({
   	  	 status : results,
   	  	 message : 'Data UnSuccessfully Created'
   	  })
   }
})


router.post('/retreive', async (req, res) => {

   const results = await RetrieveServices()

   if(results){
	  res
	   .status(200)
	   .send(results)
   }else{
      res
   	   .status(500)
   	   .send({
   	   	 status : results,
   	  	 message : 'Data Failed To Retrieved'
   	  })
   }
})

router.post('/update', async (req, res) => {

   const { id, obj } = req.body

   const results = await UpdateServices(id, obj)

   if(results){

	   	res
	   	  .status(200)
	   	  .send({
	   	  	 status : results,
	   	  	 message : 'Data Successfully Updated'
	   	  })

   }else{
      res
   	  .status(500)
   	  .send({
   	  	 status : results,
   	  	 message : 'Data UnSuccessfully Updated'
   	  })
   }
})
	

router.post('/delete', async (req, res) => {

   const { id }  = req.body

   const results = await UpdateServices(id)

   if(results){

	   	res
	   	  .status(200)
	   	  .send({
	   	  	 status : results,
	   	  	 message : 'Data Successfully Deleted'
	   	  })

   }else{
      res
   	  .status(500)
   	  .send({
   	  	 status : results,
   	  	 message : 'Data UnSuccessfully Deleted'
   	  })
   }
	
})

module.exports = router