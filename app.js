const express = require('express');
const { create } = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars
const hbs = create({
  extname: '.handlebars',
  partialsDir: __dirname + '/views/partials/',
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layouts/'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Serve static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

app.get('/admin', (req, res) => {
  res.render('admin');
});

app.get('/myOrders', (req, res) => {
  res.render('myOrders', { orders: [] }); // Replace [] with actual orders data
});

app.get('/orderConfirmation', (req, res) => {
  res.render('orderConfirmation', { orderNumber: '12345' });
});

app.get('/editLookupTable', (req, res) => {
  res.render('editLookupTable', { entries: [] }); // Replace [] with actual entries data
});

// Handle 404 - Keep this as a last route
app.use((req, res, next) => {
  res.status(404).render('notfound');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
