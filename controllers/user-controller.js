const { User } = require('../models');

const userController = {
    getAllUser(req, res) {
        User.find({})
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .select('-__v')
        .sort({ _id: -1 })
        .then(dbSNAData => res.json(dbSNAData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .select('-__v')
        .then(dbSNAData => {
            if (!dbSNAData) {
              res.status(404).json({ message: 'No user found with this id!' });
              return;
            }
            res.json(dbSNAData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    createUser({ body }, res) {
        User.create(body)
        .then(dbSNAData => res.json(dbSNAData))
        .catch(err => res.status(400).json(err));
    },
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbPSNAData => {
            if (!dbPSNAData) {
              res.status(404).json({ message: 'No user found with this id!' });
              return;
            }
            res.json(dbPSNAData);
        })
        .catch(err => res.status(400).json(err));
    },
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbSNAData => {
            if (!dbSNAData) {
              res.status(404).json({ message: 'No user found with this id!' });
              return;
            }
            res.json(dbSNAData);
        })
        .catch(err => res.status(400).json(err));
    }
    
}

module.exports = userController;