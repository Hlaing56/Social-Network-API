const { Thought, User } = require('../models');

const thoughtController = {
    getAllThought(req, res) {
        Thought.find({})
        .select('-__v')
        .sort({ _id: -1 })
        .then(dbSNAData => res.json(dbSNAData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
        .select('-__v')
        .then(dbSNAData => {
            if (!dbSNAData) {
              res.status(404).json({ message: 'No thought found with this id!' });
              return;
            }
            res.json(dbSNAData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    createThought({ params, body }, res) {
        console.log(body);
        Thought.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
              { _id: params.userId },
              { $push: { thoughts: _id } },
              { new: true }
            );
        })
        .then(dbSNAData => {
            if (!dbSNAData) {
              res.status(404).json({ message: 'No user found with this id!' });
              return;
            }
            res.json(dbSNAData);
        })
        .catch(err => res.json(err));
    },
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbPSNAData => {
            if (!dbPSNAData) {
              res.status(404).json({ message: 'No thought found with this id!' });
              return;
            }
            res.json(dbPSNAData);
        })
        .catch(err => res.status(400).json(err));
    },
    removeThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
        .then(dbSNAData => {
            if (!dbSNAData) {
              res.status(404).json({ message: 'No user found with this id!' });
              return;
            }
            res.json(dbSNAData);
        })
        .catch(err => res.json(err));
    },
    createReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
          { _id: params.thoughtId },
          { $push: { reactions: body } },
          { new: true, runValidators: true }
        )
          .then(dbSNAData => {
            if (!dbSNAData) {
              res.status(404).json({ message: 'No thought found with this id!' });
              return;
            }
            res.json(dbSNAData);
          })
          .catch(err => res.json(err));
    },
    removeReaction({ params }, res) {
        Thought.findOneAndUpdate(
          { _id: params.thoughtId },
          { $pull: { reactions: { reactionId: params.reactionId } } },
          { new: true }
        )
          .then(dbSNAData => res.json(dbSNAData))
          .catch(err => res.json(err));
      }
}

module.exports = thoughtController;