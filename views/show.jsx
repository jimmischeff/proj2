const React = require('react');
const Layout = require('./layout');

class Show extends React.Component {
    render() {
        return(
            <Layout title='show' style={{display: 'inline-block'}}>
                <main className='showMain'>
                <h2><a href='/recipes'>Back to Main</a></h2> <br/>
                <div>
                <h1>{this.props.recipe.name}</h1>
              {<img src={this.props.recipe.img} />} <br/>
              Time: {this.props.recipe.time} minutes<br/>
              Calories: {this.props.recipe.calories} <br/>
              Ingredients: {this.props.recipe.ingredients} <br/>
              <a href={`/recipes/${this.props.recipe._id}/edit`}>Edit</a>
              <form action={`/recipes/${this.props.recipe._id}?_method=DELETE`} method='POST'>
                <input type='submit' value= 'DELETE' />
              </form>
                </div>
                </main>
            </Layout>
        )
    }
}

module.exports = Show;