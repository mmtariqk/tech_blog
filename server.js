const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');

const helpers = require('./utils/helpers');

const exphbs = require('express-handlebars');

const hbs = exphbs.create({ helpers });

const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3003;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'bigbluedog',
  cookie: {
        // The session will automatically expire in 10 minutes
        expires: 10 * 60 * 1000
  },
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// get added
//app.get('/', (req, res)=> {
//res.sendFile(path.join(__dirname, 'public', 'index.js'))
//});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

// Now turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Server now listening'));
});