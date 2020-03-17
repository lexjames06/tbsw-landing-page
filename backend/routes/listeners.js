const router = require('express').Router();
const Listener = require('../models/listener.model');

router.route('/').get((req, res) => {
    Listener.find()
        .then(listeners => res.json(listeners))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const listenerName = req.body.listenerName;
    const email = req.body.email;

    const newListener = new Listener({listenerName, email});

    newListener.save()
        .then(() => res.json('Listener added!'))
        .catch(err => res.status(400).json('Error ' + err));
})

module.exports = router;