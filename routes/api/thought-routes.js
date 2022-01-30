const router = require('express').Router();
const {
    getAllThought,
    createThought,
    getThoughtById,
    updateThought,
    removeThought,
    createReaction,
    removeReaction
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThought);

router.route('/:userId').post(createThought);


router.route('/:userId/:thoughtId')
.put(createReaction);

router.route('/:id')
.get(getThoughtById)
.delete(removeThought)
.put(updateThought);

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);


module.exports = router;