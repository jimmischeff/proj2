const React = require('react');
const Layout = require('./layout');

class Edit extends React.Component {
    render() {
        return(
            <Layout title='Edit the things'>
                <form action={`/recipes/${this.props.recipe._id}?_method=PUT`} method='POST'>
                New Recipe <br/>
                    Name: <input type='text' name='name' defaultValue={this.props.recipe.name} /> <br/>
                    Img URL: <input type='text' name='img'defaultValue={this.props.recipe.img}/> <br/>
                    Time: <input type='number' name='time'defaultValue={this.props.recipe.time}/> <br/>
                    Calories: <input type='number' name='calories'defaultValue={this.props.recipe.calories}/> <br/>
                    Ingredients: <input type='text' name='ingredients'defaultValue={this.props.recipe.ingredients}/> <br/>
                    <input type='submit' value='Update Recipe'/>
                </form>
            </Layout>
        )
    }
}

module.exports = Edit;