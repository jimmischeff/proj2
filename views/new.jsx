const React = require('react');
const Layout = require('./layout');

class New extends React.Component {
    render() {
        return(
            <Layout title='NEW'>
                <label>
                    New Recipe
                    <input type='text' />
                    <input type='text' />
                    <input type='text' />
                    <input type='submit' value='Add Recipe'/>
                </label>
            </Layout>
        )
    }
}

module.exports = New;