const router = require('express').Router();
const {
    getAllThought,
    createThought,
    getThoughtById,
    updateThought,
    removeThought
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThought);

router.route('/:userId').post(createThought);

router.route('/:userId/:thoughtid')
.delete(removeThought);

router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought);

module.exports = router;