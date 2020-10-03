const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link href="//db.onlinewebfonts.com/c/73fedd912ba11f583a359ce4c2e742ed?family=Ninja+Naruto" rel="stylesheet" type="text/css"/>
          <link rel="stylesheet" href="/css/style.css"/>
          <script src="/js/app.js"></script>
        </head>
        <body>
          <header>
            <h1>Scheff's Kitchen</h1>
          <a href={'recipes/new'}>Add new recipe!</a> <br/>
          </header>
          <main>{this.props.children}</main>
          <footer>
            <h3><a href='/auth/logout'>Logout</a></h3>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;