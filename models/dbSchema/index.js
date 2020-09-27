const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    img: {type: String, required: true},
    Time: {type: Number, required: true},
    calories: {type: Number, required: true},
    ingredients: {type: String, required: true},

})

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;