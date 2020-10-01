const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="The Title!">
        {this.props.recipes.map((recipe) => {
          return(
            <div>
              <a href={`/recipes/${recipe._id}`}>{recipe.name}</a> <br/>
              {<img src={recipe.img} />} <br/>
              Time: {recipe.time} <br/>
              Calories: {recipe.calories} <br/>
              Ingredients: {recipe.ingredients} <br/>
              <a href={`/recipes/${recipe._id}/edit`}>Edit</a>
              <form action={`/recipes/${recipe._id}?_method=DELETE`} method='POST'>
                <input type='submit' value= 'DELETE' />
              </form>
            </div>
          )
        })}
      </Layout>
    );
  }
}

module.exports = Index;
