const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThought)

router
    .route('/reaction/:thoughtId')
    .put(addReaction)

router
    .route('/deletereaction/:thoughtId/:reactionId')
    .delete(removeReaction);

router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)

router
    .route('/:userId')
    .post(addThought);

router
    .route('/:userId/:thoughtId')
    .delete(removeThought)

module.exports = router;