const {Router} = require('express');
const router = Router();
const recipes = require('../../models/dbSchema/index');

/////////////////////////
//ROUTES
/////////////////////////

//INDEX

//NEW
router.get('/recipes/new', (req, res) => {
    res.render('../../views/new')
})
//DESTROY

//UPDATE

//CREATE

//EDIT

//SHOW


////////////////////
//EXPORT
////////////////////
module.exports = router;