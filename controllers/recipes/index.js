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

//CREATE
router.post('/', (req, res) => {
  recipes.create(req.body)
    res.redirect('/recipes')

})

//EDIT

//SHOW

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
