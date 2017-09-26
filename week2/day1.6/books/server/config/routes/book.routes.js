const bookController = require('../../controllers/books.controller');
const router = require('express').Router();
//  /books
router.get('/', bookController.index);
router.post('/', bookController.create);
router.put('/:id', bookController.update);
router.get('/:id', bookController.show);
router.delete('/:id', bookController.destroy);


module.exports = router;
