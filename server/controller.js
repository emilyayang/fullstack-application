const Orders = require('../database/index.js')

const controller = {
  get: (req, res) => {
    Orders.find()
      .then(data => res.status(200).send(data))
      .catch(err => res.status(400).send(err))
  },
  getUsername: (req, res) => {
    Orders.find({ username: req.body.username })
      .then(data => res.status(200).send(data))
      .catch(err => res.status(400).send(err))
  },
  post: (req, res) => {
    console.log('hhhhhhh', req)
    let { username, dish, resturant } = req.body
    Orders.create({ username, dish, resturant })
      .then(data => res.status(201).send(`posted ${dish} from ${resturant} for ${username}`))
      .catch(err => res.status(401).send(err))
  },
  put: (req, res) => {
    let { username, dish, resturant } = req.body
    let { _id } = req.params;
    Orders.findByIdAndUpdate(_id, { username, dish, resturant })
      .then(data => res.status(202).send(`updated ${dish} from ${resturant} for ${username}`))
      .catch(err => res.status(402).send(err))
  },
  delete: (req, res) => {
    let { _id } = req.params;
    Orders.findOneAndDelete(_id)
      .then(data => res.status(203).send(`deleted`))
      .catch(err => res.status(403).send(err))
  }
}

module.exports = controller;
