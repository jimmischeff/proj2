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
router.get('/', auth, (req, res) => {
  recipes.find({}, (err, recipe) => {
    res.render('index.jsx', {
      recipes: recipe
    })
  })
})

//NEW
router.get("/new", auth, (req, res) => {
  res.render('new.jsx', {
  });
});

//DESTROY
router.delete('/:id', auth, (req, res) => {
  recipes.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/recipes')
  })
})

//UPDATE
router.put('/:id', auth, (req, res) => {
  recipes.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateModel) => {
    res.redirect('/recipes')
  })
})

//CREATE
router.post('/', auth, (req, res) => {
  recipes.create(req.body)
    res.redirect('/recipes')

})

//EDIT
router.get('/:id/edit', auth, (req, res) => {
  recipes.findById(req.params.id, (err, foundRecipe) => {
    res.render('edit.jsx', {recipe: foundRecipe})
  })
})

//SHOW
router.get("/:id", auth, (req, res) => {
  recipes.findById(req.params.id, (err, foundRecipe) => {
    res.render('show.jsx', {recipe: foundRecipe})
  })
})

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
