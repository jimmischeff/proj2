const React = require('react');
const Layout = require('./layout');

class New extends React.Component {
    render() {
        return(
            <Layout title='NEW'>
                <main className='showMain'>
                <h2><a href='/recipes'>Back to Main</a></h2> <br/>
                <form action='/recipes' method='POST'>
                    New Recipe <br/>
                    Name: <input type='text' name='name'/> <br/>
                    Img URL: <input type='text' name='img'/> <br/>
                    Time: <input type='number' name='time'/> <br/>
                    Calories: <input type='number' name='calories'/> <br/>
                    Ingredients: <input type='text' name='ingredients'/> <br/>
                    <input type='submit' value='Add Recipe'/>
                </form>
                </main>
            </Layout>
        )
    }
}

module.exports = New;