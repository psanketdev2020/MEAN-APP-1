const express = require('express');
const router = express.Router();
const Empolyee = require('../models/empolyee.js');
const ObjectId = require('mongoose').Types.ObjectId;

// Base path: 'http://localhost:3000/employees';
// API: GET, POST, PUT, DELETE

// GET API
router.get('/', (req, res) => {
  Empolyee.find((err, doc) => {
    if (err) {
      console.error('Error in get api' + err);
    } else {
      res.send(doc);
    }
  })
})

// GET SINGEL EMPLOYEE DATA
router.get('/:id', (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    Empolyee.findById(req.params.id, (err, doc) => {
      if (err) {
        console.error('Error in get employee by id api' + err);
      } else {
        res.send(doc);
      }
    });
  } else {
    return res.status(400).send('No Record Found with ID' + req.params.id)
  }
})

// POST API
router.post('/', (req, res) => {
  let emp = new Empolyee({
    name: req.body.name,
    position: req.body.position,
    dept: req.body.dept
  });

  emp.save((err, doc) => {
    if (err) {
      console.error('Error in post api' + err);
    } else {
      console.log('Send Data')
      res.send(doc);
    }
  })
})

// PUT API
router.put('/:id', (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    let emp = {
      name: req.body.name,
      position: req.body.position,
      dept: req.body.dept
    }
    Empolyee.findByIdAndUpdate(req.params.id, {$set: emp},{new: true}, (err, doc) => {
      if (err) {
        console.error('Error in delete employee by id api ' + err);
      } else {
        res.send(doc);
      }
    })
  } else {
    return res.status(400).send('No Record Found with ID ' + req.params.id)
  }
})

// DELETE API
router.delete('/:id', (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    Empolyee.findByIdAndRemove(req.params.id, (err, doc) => {
      if (err) {
        console.error('Error in delete employee by id api' + err);
      } else {
        res.send(doc);
      }
    })
  } else {
    return res.status(400).send('No Record Found with ID' + req.params.id)
  }
});



module.exports = router;