//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const auth = require("../authmiddleware");
const recipes = require ('../../models/dbSchema')

///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////

//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS

//INDEX
router.get('/', (req, res) => {
  recipes.find({}, (err, recipe) => {
    res.render('index.jsx', {
      recipes: recipe
    })
  })
})

//NEW
router.get("/new", (req, res) => {
  res.render('new.jsx', {
  });
});

//DESTROY

//UPDATE
router.put('/:id', (req, res) => {
  recipes.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateModel) => {
    res.redirect('/recipes')
  })
})

//CREATE
router.post('/', (req, res) => {
  recipes.create(req.body)
    res.redirect('/recipes')

})

//EDIT
router.get('/:id/edit', (req, res) => {
  recipes.findById(req.params.id, (err, foundRecipe) => {
    res.render('edit.jsx', {recipe: foundRecipe})
  })
})

//SHOW

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
