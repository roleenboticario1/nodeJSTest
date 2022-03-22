const express = require('express')
const router = express.Router()

const CreateService = require('../services/Create')
const RetrieveService = require('../services/Retrieve')
const UpdateService = require('../services/Update')
const DeleteService = require('../services/Delete')

router.post('/create', async (req, res) => {
  const {  title, description } = req.body

  const results = await CreateService( title, description)

  if (results) {
    res
      .status(200)
      .send({
        status: results,
        message: 'Data Successfully Created!'
      })
  } else {
    res
      .status(500)
      .send({
        status: results,
        message: 'Data Unsuccessfully Created!'
      })
  }
})

router.get('/retrieve/:id', async (req, res) => {


  const results = await RetrieveService(req.params.id)

  if (results) {
    res
      .status(200)
      .send(results)
  } else {
    res
      .status(500)
      .send({
        status: results,
        message: 'Dat Not Retrieved!'
      })
  }
})

router.put('/update', async (req, res) => {
  const { _id, set } = req.body

  const results = await UpdateService(_id, set)

  if (results) {
    res
      .status(200)
      .send({
        status: results,
        message: 'Data Successfully Updated!'
      })
  } else {
    res
      .status(500)
      .send({
        status: results,
        message: 'Data Unsuccessfully Updated'
      })
  }
})

router.post('/delete', async (req, res) => {
  const { _id } = req.body

  const results = await DeleteService(_id)

  if (results) {
    res
      .status(200)
      .send({
        status: results,
        message: 'Data Successfully Deleted!'
      })
  } else {
    res
      .status(500)
      .send({
        status: results,
        message: 'Data Unsuccessfully Deleted!'
      })
  }
})

module.exports = router