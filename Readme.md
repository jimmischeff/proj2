# Mongo - Express - Express React Views Template

## USING THIS TEMPLATE:

- Make sure to run npm install

- Environment Files are in a .env, create with your env variables. Here are some needed variables for this template to get you started. You can rename template.env into .env to get started.

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/
DB_NAME=myDatabase
SECRET=cheese
```

## Commands

`npm run dev` run dev server

`npm run start` run in production more

- For production you should add a store property to sessions that'll store the session in redis or mongo. See the express-session documentation to learn more.

- session auth built in, the user model is in **models/auth** and the auth routes are in **controllers/auth**

- If you want the connect.session() warning to go away you can configure a mongo session store using the following library => https://www.npmjs.com/package/connect-mongo

MAKE SURE TO JOIN THE SLACK AND DISCORD COMMUNITIES AT DEVNURSERY.COM

/////////////////////////////////////////
///PROJECT NOTES
/////////////////////////////////////////

Used class examples of fruits and todo list and utilized a similar format to accomplish the recipe website.  

First roadblock was getting the controller to render, my mistake was in the route on my get statement being redundant, after that the project moved along pretty smoothly.  The boiler plate Alex provided was super helpful and made the logging in requirement for this project as easy as requiring it in the router and calling it in the routes.  

I would like to be able to enter ingredients individually, and every time I hit a button to submit it will add the entry into an array to make teh ingredient block more dynamic.  Also, a search function to find recipes specific to a certain ingredient.  Maybe include an API from an online cook book.

Styling I just played around with css and flex properties to display how I wanted them.  and added a font family via a link tag in my layout and applying it to the html tag.

heroku URL: https://jszenproj2.herokuapp.com/auth/login