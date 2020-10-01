const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="The Title!">
        {this.props.recipes.map((recipe) => {
          return(
            <div>
              <a href='#'>{recipe.name}</a> <br/>
              {<img src={recipe.img} />} <br/>
              Time: {recipe.time} <br/>
              Calories: {recipe.calories} <br/>
              Ingredients: {recipe.ingredients} <br/>
              <a href={`/recipes/${recipe._id}/edit`}>Edit</a>
            </div>
          )
        })}
      </Layout>
    );
  }
}

module.exports = Index;
