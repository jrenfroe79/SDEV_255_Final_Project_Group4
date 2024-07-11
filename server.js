
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();



// connect to mongoDB
const dbURI = `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@sdev255projectteam1.aw1cgbj.mongodb.net/SDEV255ProjectTeam1`;

// Serve static files from the 'SDEV_255_Final_Project_Group4' directory
app.use(express.static(path.join(__dirname, '/sdev-255-final-project-group4')));

mongoose.connect(dbURI)
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
  res.redirect('/courseList')
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
