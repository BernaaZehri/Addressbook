var express = require('express')
var router = express.Router()
const Contact = require('../model/Contact')

// Get All Contacts
router.get('/contacts', (req, res, next) => {
  Contact.findAll()
    .then(contacts => {
      res.json(contacts)
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

//Get contact by id
router.get('/contact/:id', (req, res, next) => {
  Contact.find({
    where: {
      id: req.params.id
    }
  })
    .then(contact => {
      res.json(contact)
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

// POST contact
router.post('/addContact', (req, res, next) => {
  if (!req.body.Firstname || !req.body.Lastname || !req.body.Email || !req.body.Country) {
    res.status(400)
    res.json({
      error: 'Ka te dhena gabim! '
    })
  }
  else {
    Contact.create(req.body)
      .then(() => {
        res.send('Kontakti u shtua!')
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  }
})

// DELETE contact
router.delete('/deleteContact/:id', (req, res, next) => {
  Contact.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => {
      res.send('Kontakti u fshi!')
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

// Update contact
router.put('/updateContact/:id', (req, res, next) => {
  if (!req.body.Firstname) {
    res.status(400)
    res.json({
      error: 'Bad Data'
    })
  } else {
    Contact.update(
      { Firstname: req.body.Firstname },
      { where: { id: req.params.id } }
    )
      .then(() => {
        res.send('Kontakti u ndryshua!')
      })
      .error(err => handleError(err))
  }
})

module.exports = router