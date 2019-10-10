const path = require('path'),
      express = require('express'),
      hBars = require('express-handlebars');
      
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.engine('.hbs', hBars({
    extname: '.hbs', 
    defaultLayout: null
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

const {user, house} = require('./controllers');
const {userMdware, houseMdware} = require ('./middlewares');

app.get('/', (req, res) => res.render('main'));
app.get('/login', (req, res) => res.render('login'));
app.get('/sign', (req, res) => res.render('sign'));
app.get ('/gethouse', (req, res) => res.render('gethouse'));


app.post('/register', userMdware.isUserValidMdware, user.createUser);
app.get('/users', user.findUser);
app.get('/users/:userId', userMdware.isUserPresentMdware, user.getById);

app.post('/myHouse', houseMdware.isHouseValidMdware, house.createHouse);
app.get ('/houses', house.findHouses);
app.get('/houses/:houseId', houseMdware.isHousePresentMdware, house.getHouseById);

app.post('/log', user.authUser);

app.all('*', (req, res) => {
    res.render('nfound');
});

app.listen(port, () => console.log(`App listening on port ${port}!`))
