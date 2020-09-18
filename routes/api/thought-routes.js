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
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .put(addReaction)
    
router
    .route('/:userId')
    .post(addThought);

router
    .route('/:userId/:thoughtId')
    .delete(removeThought)

router
    .route(':thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;